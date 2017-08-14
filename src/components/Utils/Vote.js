import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import VotingOption from './VotingOption';

class Vote extends Component {
    static defaultProps = {
        col: 2,
        title: [
            '我想入門', '我想精進'
        ],        
        vote: {
            basic: {
                number: 20,
                friends: [
                    {
                        id: 2,
                        thumbnailUrl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p32x32/16998846_1290498551040215_6726353178621101254_n.jpg?oh=87ca08598e9aa9589eeb1ad456e33c66&oe=59FF081B"
                    }
                ]
            },
            advanced: {
                number: 15,
                friends: [
                    {
                        id: 1,
                        thumbnailUrl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p40x40/16426235_1335337256541448_4112461475677668738_n.jpg?oh=44bcbeb78e0f146ae8a22b56e20fd444&oe=5A0AD7C3"
                    }
                ]
            },
            level: 'advanced'
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            checkedIndex: {
                'null': -1,
                'basic': 0,
                'advanced': 1
            }[this.props.vote.level]
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
        let {
            vote: {
                basic,
                advanced
            }
        } = this.props;
        const {col, title} = this.props;

        basic.progress = basic.number * 100 / (basic.number + advanced.number);
        advanced.progress = advanced.number * 100 / (basic.number + advanced.number);

        let colProps,
            secondColClassName;
        if (col === 1) {
            colProps = {
                xs: 12,
                lg: 12
            }
            secondColClassName = 'mt-2';
        } else if (col === 2) {
            colProps = {
                xs: 12,
                lg: 6
            }
            secondColClassName = 'mt-2 mt-lg-0';
        }

        return (
            <div className={`w-100 ${this.props.className}`}>
                <Row>
                    <Col {...colProps}>
                        <VotingOption index={0} checked={this.state.checkedIndex === 0} onCheckboxChange={this.onCheckboxChange} progress={basic.progress} title={title[0]} friends={basic.friends} number={basic.number}/>
                    </Col>
                    <Col {...colProps} className={secondColClassName}>
                        <VotingOption index={1} checked={this.state.checkedIndex === 1} onCheckboxChange={this.onCheckboxChange} progress={advanced.progress} title={title[1]} friends={advanced.friends} number={advanced.number}/>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default Vote;
