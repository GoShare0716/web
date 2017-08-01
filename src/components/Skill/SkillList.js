import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {history} from '../../utils';
import {ListGroup, Row} from 'reactstrap';

import MultipleFilter from '../Utils/MultipleFilter';
import SkillListItem from './SkillListItem';
import Skill from './Skill';

const categoryOptions = [
    [
        '全部', 'all'
    ],
    [
        '科技', 'technology'
    ],
    ['美學', 'aesthetics']
];
const orderingOptions = [
    [
        '熱門', 'hot'
    ],
    ['字母順序', 'alphabetical']
];

export default class SkillList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };

        this.modalToggle = this.modalToggle.bind(this);
    }

    modalToggle() {
        if (this.state.isOpen) {
            this.setState({
                isOpen: true
            }, e => history.push('/skill'));

        } else {
            this.setState({
                isOpen: true
            });
        }
    }

    render() {
        return (
            <div className="outer">
                <h1 className="mt-5 mb-3">技能列表</h1>
                <ListGroup className="w-100 mb-3">
                    <MultipleFilter title="分類" options={categoryOptions} defaultOption={'all'} optionOnClick={selectedOption => console.log(selectedOption)}/>
                    <MultipleFilter title="順序" options={orderingOptions} defaultOption={'hot'} optionOnClick={selectedOption => console.log(selectedOption)}/>
                </ListGroup>
                <Row>
                    <SkillListItem/>
                    <SkillListItem/>
                    <SkillListItem/>
                    <SkillListItem/>
                </Row>
                <Route path='/skill/:id' render={props => <Skill {...props} isOpen={this.state.isOpen} toggle={this.modalToggle}/>}/>
            </div>
        );
    }
}
