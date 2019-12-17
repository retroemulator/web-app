import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import noop from '../../utils/noop';
import './PrimaryLayout.css';

function PrimaryLayout(props) {
  return (
    <Container fluid className="PrimaryLayout-container">
        <Row>
          <Col md="12">
            <span
              onClick={props.onBackClick ? props.onBackClick : noop}
              className="PrimaryLayout-back-button">
              {'\u2190'} Back
            </span>
          </Col>
        </Row>
        <Row>
          <Col md="3" />
          <Col md="6">
            {props.children}
          </Col>
          <Col md="3" />
        </Row>
      </Container>
  );
}

export default PrimaryLayout;
