import React from 'react';
import { withRouter } from 'react-router-dom';
import Enum from 'enum';
import Spinner from '../../components/Spinner';
import PrimaryLayout from '../../layout/PrimaryLayout';
import './CreateSessionPage.css';

const ActivePage = new Enum({
  USER_SELECT_CONSOLE: 1,
  USER_UPLOAD_ROM: 2,
});

class CreateSessionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      consoles: [],
      consoleItemSelected: null,
      activePage: ActivePage.USER_SELECT_CONSOLE,
    }
    this.handleBackButton = this.handleBackButton.bind(this);
    this.handleConsoleItemClick = this.handleConsoleItemClick.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('http://localhost:3001/api/v1/console')
      .then(res => res.json())
      .then(res => {
        this.setState({
          consoles: res.data.consoles,
          loading: false,
          activePage: ActivePage.USER_SELECT_CONSOLE,
        });
      });
  }

  handleBackButton() {
    switch (this.state.activePage) {
      case ActivePage.USER_SELECT_CONSOLE:
        this.props.history.push('/');
        break;
      case ActivePage.USER_UPLOAD_ROM:
      default:
        this.setState({
          activePage: ActivePage.USER_SELECT_CONSOLE,
          consoleItemSelected: null,
        });
        break;
    }
  }

  handleConsoleItemClick(item) {
    this.setState({
      consoleItemSelected: item,
      activePage: ActivePage.USER_UPLOAD_ROM,
    });

    // this.setState({ loading: true });
    // fetch('http://localhost:3001/api/v1/create-session', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ consoleId }),
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //   });
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
        {!this.state.loading && this.state.activePage === ActivePage.USER_SELECT_CONSOLE && (
          <div className="CreateSessionPage-text-container">
            <div className="CreateSessionPage-title">
              Select a console
            </div>
            <div className="CreateSessionPage-item-container">
              {this.state.consoles.map((item, i) => (
                <div
                  key={item.consoleId}
                  className="CreateSessionPage-item"
                  onClick={() => this.handleConsoleItemClick(item)}
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
        {!this.state.loading && this.state.activePage === ActivePage.USER_UPLOAD_ROM && (
          <div className="CreateSessionPage-text-container">
            <div className="CreateSessionPage-title">
              Upload ROM file
            </div>
            <div className="CreateSessionPage-item-container">
              {/* TODO */}
            </div>
          </div>
        )}
      </PrimaryLayout>
    );
  }
}

export default withRouter(CreateSessionPage);
