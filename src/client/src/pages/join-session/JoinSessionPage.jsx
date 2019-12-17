import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import CodeInput from '../../components/CodeInput';
import './JoinSessionPage.css';

function isKeycodeBackspace(keyCode) {
  return keyCode === 8;
}

class JoinSessionPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  handleBackButton() {
    this.props.history.push('/');
  }

  render() {
    return (
      <Container fluid className="JoinSessionPage-container">
        <Row>
          <Col md="12">
            <span
              onClick={this.handleBackButton}
              className="JoinSessionPage-back-button">
              {'\u2190'} Back
            </span>
          </Col>
        </Row>
        <Row>
          <Col md="3" />
          <Col md="6">
            <div className="JoinSessionPage-text-container">
              <div className="JoinSessionPage-title">
                Enter your 5-digit session code
              </div>
              <div>
                <CodeInput
                  length={5}
                  onIncomplete={() => console.log('incomplete')}
                  onComplete={val => console.log('complete', val)}
                />
              </div>
            </div>
          </Col>
          <Col md="3" />
        </Row>
      </Container>
    );
  }
}

export default withRouter(JoinSessionPage);
