import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import Loader from 'react-loader-spinner';

import './Grid.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            consoleKey: null,
            redirectData: null,
        };
        this.loadGames = this.loadGames.bind(this);
        this.selectGame = this.selectGame.bind(this);
    }

    componentDidMount() {
        this.setState({
            loading: true,
            consoleKey: this.props.consoleKey
        });
        this.loadGames(this.props.consoleKey);
    }

    componentWillUpdate(nextProps) {
        if (nextProps.consoleInfo.key !== this.state.consoleKey) {
            this.setState({
                loading: true,
                consoleKey: nextProps.consoleInfo.key
            });
            this.loadGames(nextProps.consoleInfo.key);
        }
    }

    loadGames(consoleKey) {
        if (!consoleKey) return;

        fetch(`http://localhost:5001/games/${consoleKey}`)
        .then(r => r.json())
        .then(r => {
            this.setState({ data: r.data });
            setTimeout(() => {
                this.setState({ loading: false });
            }, 1000);
        });
    }

    selectGame(data) {
        this.setState({ redirectData: data });
    }

    render() {
        if (this.state.redirectData) {
            return (
                <Redirect to={{
                    pathname: '/stream',
                    state: this.state.redirectData
                }}/>
            );
        }

        return (
            <Container fluid className="Grid">
                {this.state.loading && (
                    <Loader
                        type="Grid"
                        color="#e6e6e6"
                        height={200}
                        width={200}
                    />
                )}
                {!this.state.loading && this.state.data.length === 0 && (
                    <div className="Grid-empty">No games available for this console.</div>
                )}
                {!this.state.loading && (
                    <Row>
                        {this.state.data.map(item => {
                            return (
                                <Col key={item._id} md="4">
                                    <img
                                        className="Grid-item-img"
                                        src={item.thumbnailUrl}
                                        alt={item._id}
                                        onClick={() => this.selectGame(item)}/>
                                </Col>
                            )
                        })}
                    </Row>
                )}
            </Container>
        );
    }
}

export default Grid;
