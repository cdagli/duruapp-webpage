import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';

class AppContainer extends Component {
    render() {
        return (
            <Row className="appContainer">
                <Col sm={4} xs={12}>
                    <img src={'/img/' + this.props.data.mockPath} alt="" className="src"/>
                </Col>
                <Col sm={5} xs={12} smOffset={3} mdOffset={2} className="text">
                    <img src={'/img/' + this.props.data.iconPath} className="appIcon" alt=""/>
                    <h2 className="appName">{this.props.data.name}</h2>
                    <p className="appDescription">{this.props.data.description}</p>
                    <a
                        href={this.props.data.storeUrl}
                        className='storeIcon text-center'
                        target='_blank'></a>
                </Col>
            </Row>
        );
    }
}

export default AppContainer;