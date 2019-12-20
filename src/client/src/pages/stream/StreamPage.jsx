import React from 'react';
import { withRouter } from 'react-router-dom';
import PrimaryLayout from '../../layout/PrimaryLayout';

class StreamPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  componentDidMount() {
    // TODO: send request to server to check if the id/session is correct and
    // active
    const { sessionId } = this.props.match.params;
    console.log(sessionId);
  }

  handleBackButton() {
    this.props.history.push('/create-session');
  }

  render() {
    return (
      <PrimaryLayout
        onBackClick={this.handleBackButton}
      >
        <div>
          Test
        </div>
      </PrimaryLayout>
    );
  }
}

export default withRouter(StreamPage);
