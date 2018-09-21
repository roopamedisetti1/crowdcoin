import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Campaign from '../../../etherium/campaign';
import web3 from '../../../etherium/web3';
import { Link,Router } from '../../../routes';


class RequestNew extends Component {

    state = {
      value : '',
      description : '',
      recipient : '',
      errorMessage : '',
      loading : false
    };

  static async getInitialProps(props)
  {
      const {address} = props.query;

      return {address};
  }

  onSubmit = async (event) => {
    event.preventDefault();


    const campaign = Campaign(this.props.address);// declared above our contract instance.

    const {description, value, recipient } = this.state;

    this.setState({loading : true,  errorMessage : ''});

        try {

          const accounts = await web3.eth.getAccounts();

          await campaign.methods
          .createRequest(this.state.description, web3.utils.toWei(this.state.value, 'ether'), this.state.recipient)
          .send( {
              from : accounts[0]
          });

          Router.replaceRoute(`/Campaigns/${this.props.address}/requests`);

         } catch (err) {
              this.setState({errorMessage : err.message});
        }

        this.setState({loading : false, value : ''});

  };

  onCancel = (event) => {
   event.preventDefault;
   Router.pushRoute(`/campaigns/${this.props.address}/requests`);
 }


  render () {
      return (
        <Layout>
        <Link route={`/Campaigns/${this.props.address}/requests`}>
            <a>
                 Back 
            </a>
        </Link>
        <h3> Create a Request </h3>
         <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
                <label>Description</label>
                <Input
                  value={this.state.description}
                  onChange={event => this.setState({description : event.target.value})}

                />
            </Form.Field>
            <Form.Field>
                <label>Value in Ether</label>
                <Input
                  value={this.state.value}
                  onChange={event => this.setState({value : event.target.value})}
                />
            </Form.Field>
            <Form.Field>
                <label>Recipient</label>
                <Input
                  value={this.state.recipient}
                  onChange={event => this.setState({recipient : event.target.value})}

                />
            </Form.Field>

            <Message
                error
                header='OOPS! There was some errors with your submission'
                content={this.state.errorMessage}
              />
            <Button loading={this.state.loading} primary> Create! </ Button>
            <Button onClick={this.onCancel}>Cancel</Button>
        </Form>
        </Layout>
      );
  }

}

export default RequestNew;
