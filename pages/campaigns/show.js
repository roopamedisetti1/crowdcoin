import React, {Component} from 'react';
import { Card, Grid, Button } from 'semantic-ui-react'
import Layout from '../../components/Layout';
import Campaign from '../../etherium/campaign';
import web3 from '../../etherium/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {

  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      address : props.query.address,
      minimumContribution : summary[0],
      balance :  summary[1],
      requestsCount :  summary[2],
      approversCount :  summary[3],
      manager :  summary[4]
    };
  }

 renderCards() {

   const {
     balance,
     manager,
     minimumContribution,
     requestsCount,
     approversCount
   } = this.props;

   const items = [
       {
         header: manager,
         description: 'The manager created this campaign and can create request for withdraw money',
         meta: 'Address of Manager',
         style : {overflowWrap : 'break-word'}
       },
       {
         header: minimumContribution,
         description: 'You must contribute at least this much wei to become a contributor ',
         meta: 'Minimum contribution (wei)'
       },
       {
         header: requestsCount,
         description: 'A request tries to withdraw money from the Contract. Requests must be approved by approvers ',
         meta: 'Number of Requests'
       },
       {
         header: approversCount,
         description: 'Number of people who have already donated to the campaign',
         meta: 'Number of Approvers'
       },
       {
         header: web3.utils.fromWei(balance, 'ether') + " ether",
         description: 'The balance is how much money this campaign has left to spend.',
         meta: 'Campaign balance (ether)'
       }

      ]

      return <Card.Group items={items} />
 }

  render() {
    return (
      <Layout>
          <h3>Campaign show </h3>
          <Grid>
            <Grid.Row>
                  <Grid.Column width={10}>
                     {this.renderCards()}

                  </Grid.Column>
                  <Grid.Column width={4}>
                       <ContributeForm address={this.props.address} />
                  </Grid.Column>
             </Grid.Row>

             <Grid.Row>
                 <Grid.Column >
                     <Link route={`/Campaigns/${this.props.address}/requests`}>
                        <a>
                            <Button primary>View Requests </Button>
                        </a>
                     </Link>
                </Grid.Column>
             </Grid.Row>

          </Grid>
      </Layout>
    );
  }

}

export default CampaignShow;
