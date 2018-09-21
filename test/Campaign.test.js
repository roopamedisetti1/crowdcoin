const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3 (ganache.provider());
const compiledFactory = require('../etherium/build/CampaignFactory.json');
const compiledCampaign = require('../etherium/build/Campaign.json');


let campaign;
let factory;
let accounts;
let campaignAddress;


beforeEach(async () =>{
   accounts = await web3.eth.getAccounts();

//new version of contract that is going to be deployed
   factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({from : accounts[0], gas : '1000000'});

//we are trying to call a function and it is sending a transaction
     await factory.methods.createCampaign('100').send({
      from : accounts[0],
      gas : '1000000'
     });

//view always use the call
  //  const addresses =  await factory.methods.getDeployedCampaigns().call();
  //  campaignAddress = addresses[0];

  //ES script and replace the above two statements
    [campaignAddress] =  await factory.methods.getDeployedCampaigns().call();

//the contract is already deployed when factory is created in line 18
//so we are accessing the addresses of all the contracts by getDeployedCampaigns
//so we are trying to retrieve the campaign that already exists in etherium network
    campaign = await new web3.eth.Contract(
      JSON.parse(compiledCampaign.interface),
      campaignAddress
    );

});


describe ('Campaigns', () => {

    it('Deploys a factory and a campaign', () => {
      assert.ok(factory.options.address);
      assert.ok(campaign.options.address);
    });


   it('marks caller as the campaign manager', async() => {
     const manager = await campaign.methods.manager().call(); //call and manager is public
      assert.equal(accounts[0], manager);
   });

   it('donate the money to campaign and mark them as approver', async() => {
       await campaign.methods.contribute().send({
         value : '200',
         from : accounts[1]
     });
     //data lookup and approver is mapping. we pass an account and we get whether that address exists or not.
     const isContributor = await campaign.methods.approvers(accounts[1]).call();
     assert(isContributor);
   });

   it('requires minimumContribution ', async() => {
      try{
          await campaign.methods.contribute.send({
            value : '5',
            from : accounts[1]
          });

          assert(false);

      } catch(err){
         assert(err);
      }

   });


   it('manager has a ability to make a paymentrequest', async() => {
     await campaign.methods
     .createRequest('Buy Batteries', '100', accounts[1])
     .send({
         from : accounts[0],
         gas : '1000000'
      });


      const request = await campaign.methods.requests(0).call();

      assert.equal('Buy Batteries', request.description);

   });


  it('processes requests', async () => {
      await campaign.methods.contribute().send({
        from : accounts[0],
        value : web3.utils.toWei('10', 'ether'),
        gas : 1000000
      });

      await campaign.methods.createRequest('Buy Flowers', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({
        from : accounts[0],
        gas : 1000000
      });

      await campaign.methods.approveRequest(0).send({
        from : accounts[0],
        gas : '1000000'
      });

      await campaign.methods.finalizeRequest(0).send({
        from : accounts[0],
        gas : '1000000'
      });

      //the account has the new balance
       let balance =   await web3.eth.getBalance(accounts[1]);
       balance = web3.utils.fromWei(balance, 'ether');
       balance = parseFloat(balance);

       console.log(balance);
       assert(balance > 104);

  });





});
