import React from 'react';
import { withRouter } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import PrimaryLayout from '../../layout/PrimaryLayout';
import './CreateSessionPage.css';

class CreateSessionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      consoles: [],
    }
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('http://localhost:3001/api/v1/console')
      .then(res => res.json())
      .then(res => {
        this.setState({
          consoles: res.data.consoles,
          loading: false,
        });
      });
  }

  handleBackButton() {
    this.props.history.push('/');
  }

  handleItemClick(item) {
    // TODO: make request to the SessionService to spin up a new Docker container
    // for running the emulator + video stream
    console.log(item);
  }

  render() {
    return (
      <PrimaryLayout
        onBackClick={this.handleBackButton}
      >
        {this.state.loading && (
          <div className="CreateSessionPage-spinner">
            <Spinner />
          </div>
        )}
        {!this.state.loading && (
          <div className="CreateSessionPage-text-container">
            <div className="CreateSessionPage-title">
              Select a console
            </div>
            <div className="CreateSessionPage-item-container">
              {this.state.consoles.map((item, i) => (
                <div
                  key={item.consoleId}
                  className="CreateSessionPage-item"
                  onClick={() => this.handleItemClick(item)}
                >
                  <img
                    className="CreateSessionPage-item-image"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </PrimaryLayout>
    );
  }
}

export default withRouter(CreateSessionPage);
