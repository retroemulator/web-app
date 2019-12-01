import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import Loader from 'react-loader-spinner';

import './Emulator.css';

class Emulator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: null,
            redirectBack: false,
        };
        this.loadGame = this.loadGame.bind(this);
        this.onBack = this.onBack.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true, data: this.props.location.state });
        this.loadGame(this.props.location.state.romUrl);
    }

    loadGame(romUrl) {
        console.log(this.props.location.state.romUrl);
        console.log(JSON.stringify({ romUrl }));

        fetch('http://localhost:5000/vba-startup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ romUrl }),
        })
        .then(r => r.json())
        .then(r => {
            console.log('game loaded');
            console.log(r);
            setTimeout(() => {
                this.setState({ loading: false });
            }, 1000);
        });
    }

    onBack() {
        this.setState({ redirectBack: true });
    }

    render() {
        if (this.state.redirectBack) {
            return (
                <Redirect to={{ pathname: '/' }}/>
            );
        }

        return (
            <Container fluid>
                <Row className="Emulator-header">
                    <Col md="12">
                        <span
                            className="Emulator-back"
                            onClick={this.onBack}
                            >⟨ Back</span>
                    </Col>
                </Row>
                <Row>
                    <Col md="2" />
                    <Col md="8" className="Emulator-main">
                        {this.state.loading && (
                            <div>
                                <div className="Emulator-loading-text">Loading ROM...</div>
                                <Loader
                                    type="Grid"
                                    color="#e6e6e6"
                                    height={150}
                                    width={150}
                                />
                            </div>
                        )}
                        {!this.state.loading && (
                            <iframe
                                title="gba-emulator"
                                src="http://localhost:6080"
                                width="600"
                                height="420"/>
                        )}
                    </Col>
                    <Col md="2" />
                </Row>
            </Container>
        );
    }
}

export default Emulator;
