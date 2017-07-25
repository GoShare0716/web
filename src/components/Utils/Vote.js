import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import VotingOption from './VotingOption';

class Vote extends Component {
    static defaultProps = {
        col: 2
    };

    constructor(props) {
        super(props);
        this.state = {
            checkedIndex: -1
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
        let props,
            className;
        if (this.props.col === 1) {
            props = {
                xs: 12,
                lg: 12
            }
            className = 'mt-2';
        } else if (this.props.col === 2) {
            props = {
                xs: 12,
                lg: 6
            }
            className = 'mt-2 mt-lg-0';
        }
        return (
            <div className={`w-100 ${this.props.className}`}>
                <Row>
                    <Col {...props}><VotingOption index={0} checked={checkedIndex === 0} onCheckboxChange={this.onCheckboxChange}/></Col>
                    <Col {...props} className={className}><VotingOption index={1} checked={checkedIndex === 1} onCheckboxChange={this.onCheckboxChange}/></Col>
                </Row>
            </div>
        );
    }

}

export default Vote;
