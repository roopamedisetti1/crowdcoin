import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';


const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xC2E952fC80fb0C101D532fB42a29903dc74E2c53'
);

export default instance;
