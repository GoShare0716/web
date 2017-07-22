import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import VotingOption from './VotingOption';

class Vote extends Component {

    render() {
        return (
            <div className={`w-100 ${this.props.className}`}>
                <Row>
                    <Col xs={12} lg={6}><VotingOption /></Col>
                    <Col xs={12} lg={6} className="mt-2 mt-lg-0"><VotingOption /></Col>
                </Row>
            </div>
        );
    }

}

export default Vote;
