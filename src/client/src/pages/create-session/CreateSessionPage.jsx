import React from 'react';
import { withRouter } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import PrimaryLayout from '../../layout/PrimaryLayout';
import './CreateSessionPage.css';

// TODO: this hardcodes the number of consoles available, remove this later
const CONSOLES = [
  {
    consoleId: 'gba',
    imageUrl: 'https://storage.googleapis.com/game-emulator/resources/md/gba.png',
    title: 'Game Boy Advance',
  },
  {
    consoleId: 'nes',
    imageUrl: 'https://storage.googleapis.com/game-emulator/resources/md/nes.png',
    title: 'Nintendo Entertainment System',
  },
  {
    consoleId: 'snes',
    imageUrl: 'https://storage.googleapis.com/game-emulator/resources/md/snes.png',
    title: 'Super Nintendo Entertainment System',
  },
  {
    consoleId: 'n64',
    imageUrl: 'https://storage.googleapis.com/game-emulator/resources/md/n64.png',
    title: 'Nintendo 64',
  },
];

class CreateSessionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false }), this.props.defaultLoadDelay || 0);

    // TODO: should make query to the server to get listing of all consoles
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
              {CONSOLES.map((item, i) => (
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
