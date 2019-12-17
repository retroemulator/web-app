import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@atlaskit/button';
import CodeInput from '../../components/CodeInput';
import Spinner from '../../components/Spinner';
import PrimaryLayout from '../../layout/PrimaryLayout';
import createCustomTheme from '../../utils/themes/createCustomTheme';
import './JoinSessionPage.css';

const buttonTheme = {
  primary: {
    background: {
      default: '#3F51B5',
      hover: '#3F51B5',
      active: '#3F51B5',
    },
    boxShadow: {
      default: `0 4px 0 0 #303F9F`,
      hover: `0 4px 0 0 #303F9F`,
      active: '0 0 0 0',
    },
    transform: {
      default: 'initial',
      active: 'translateY(4px)',
    },
    transition: {
      default:
        'background 0.1s ease-out, box-shadow 0.1s cubic-bezier(0.47, 0.03, 0.49, 1.38) transform:0.1s',
      active:
        'background 0s ease-out, box-shadow 0s cubic-bezier(0.47, 0.03, 0.49, 1.38) transform:0s',
    },
  },
};

class JoinSessionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codeInputValue: '',
      error: '',
      loading: false,
    };
    this.handleBackButton = this.handleBackButton.bind(this);
    this.handleIncompleteCodeInput = this.handleIncompleteCodeInput.bind(this);
    this.handleCompleteCodeInput = this.handleCompleteCodeInput.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false }), this.props.defaultLoadDelay || 0);
  }

  handleBackButton() {
    this.props.history.push('/');
  }

  handleIncompleteCodeInput() {
    this.setState({ codeInputValue: '' });
  }

  handleCompleteCodeInput(value) {
    this.setState({ codeInputValue: value })
  }

  handleSubmitButton() {
    const codeInputValue = this.state.codeInputValue;
    if (codeInputValue === undefined || codeInputValue.length === 0) return;

    // TODO: make request to the SessionService
    console.log('request to SessionService', codeInputValue);
  }

  render() {
    return (
      <PrimaryLayout
        onBackClick={this.handleBackButton}
      >
        {this.state.loading && (
          <div className="JoinSessionPage-spinner">
            <Spinner />
          </div>
        )}
        {!this.state.loading && (
          <div className="JoinSessionPage-text-container">
            <div className="JoinSessionPage-title">
              Enter your 5-digit session code
            </div>
            <div className="JoinSessionPage-code-input">
              <CodeInput
                length={5}
                onIncomplete={this.handleIncompleteCodeInput}
                onComplete={this.handleCompleteCodeInput}
              />
            </div>
            {this.state.error && (
              <div className="JoinSessionPage-error">
                {this.state.error}
              </div>
            )}
            <div className="JoinSessionPage-submit-button">
              <Button
                appearance="primary"
                theme={createCustomTheme(buttonTheme)}
                isDisabled={this.state.codeInputValue.length === 0}
                onClick={this.handleSubmitButton}
              >
                Connect to session
              </Button>
            </div>
          </div>
        )}
      </PrimaryLayout>
    );
  }
}

export default withRouter(JoinSessionPage);
