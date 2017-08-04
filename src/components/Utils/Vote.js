import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import VotingOption from './VotingOption';

class Vote extends Component {
    static defaultProps = {
        col: 2,
        defaultCheckedIndex: -1,
        progress: [
            80, 20
        ],
        title: [
            '我想入門', '我想精進'
        ],
        friends: [
            [], []
        ],
        number: [12, 36]
    };

    constructor(props) {
        super(props);
        this.state = {
            checkedIndex: this.props.defaultCheckedIndex
        };

        this.onCheckboxChange = this.onCheckboxChange.bind(this);
    }

    onCheckboxChange(e, index) {
        e.stopPropagation();
        this.setState({
            checkedIndex: this.state.checkedIndex === index
                ? -1
                : index
        });
    }

    render() {
        let {checkedIndex} = this.state;
        const {col, progress, title, friends, number} = this.props;
        let props,
            className;
        if (col === 1) {
            props = {
                xs: 12,
                lg: 12
            }
            className = 'mt-2';
        } else if (col === 2) {
            props = {
                xs: 12,
                lg: 6
            }
            className = 'mt-2 mt-lg-0';
        }
        return (
            <div className={`w-100 ${this.props.className}`}>
                <Row>
                    <Col {...props}>
                        <VotingOption index={0} checked={checkedIndex === 0} onCheckboxChange={this.onCheckboxChange} progress={progress[0]} title={title[0]} friends={friends[0]} number={number[0]}/>
                    </Col>
                    <Col {...props} className={className}>
                        <VotingOption index={1} checked={checkedIndex === 1} onCheckboxChange={this.onCheckboxChange} progress={progress[1]} title={title[1]} friends={friends[1]} number={number[1]}/>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default Vote;
