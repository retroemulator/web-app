import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import AddIcon from '@atlaskit/icon/glyph/editor/add';
import OutputIcon from '@atlaskit/icon/glyph/bitbucket/output';
import HomePageButton from '../../components/HomePageButton';
import './HomePage.css';

class HomePage extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <Container fluid className="HomePage">
        <Row className="HomePage-row">
          <Col md="6" className="HomePage-panel HomePage-panel-left">
            <HomePageButton
              icon={<AddIcon size="large" label="add" />}
              title="Create"
              description="a new session"
            />
          </Col>
          <Col md="6" className="HomePage-panel">
            <HomePageButton
              icon={<OutputIcon size="large" label="join" />}
              title="Join"
              description="an existing session"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
