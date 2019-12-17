import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import AddIcon from '@atlaskit/icon/glyph/editor/add';
import OutputIcon from '@atlaskit/icon/glyph/bitbucket/output';
import Enum from 'enum';
import HomePageButton from '../../components/HomePageButton';
import './HomePage.css';

const ButtonTarget = new Enum({
  CreateSession: 1,
  JoinSession: 2,
});

function HomePage(props) {
  const handleButtonClick = (target) => {
    switch (target) {
      case ButtonTarget.CreateSession:
        props.history.push('/create-session');
        break;
      case ButtonTarget.JoinSession:
        props.history.push('/join-session');
        break;
      default:
        break;
    }
  }

  return (
    <Container fluid className="HomePage">
      <Row className="HomePage-row">
        <Col md="6" className="HomePage-panel HomePage-panel-left">
          <HomePageButton
            icon={<AddIcon size="large" label="create" />}
            title="Create"
            description="a new session"
            onClick={() => handleButtonClick(ButtonTarget.CreateSession)}
          />
        </Col>
        <Col md="6" className="HomePage-panel">
          <HomePageButton
            icon={<OutputIcon size="large" label="join" />}
            title="Join"
            description="an existing session"
            onClick={() => handleButtonClick(ButtonTarget.JoinSession)}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(HomePage);
