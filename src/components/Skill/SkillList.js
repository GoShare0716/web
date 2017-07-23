import React, {Component} from 'react';
import {ListGroup, Row} from 'reactstrap';
import MultipleFilter from '../Utils/MultipleFilter';
import SkillListItem from './SkillListItem';
import Skill from './Skill';

const categoryOptions = ['全部', '科技', '美學'];
const orderingOptions = ['熱門', '字母順序'];

export default class SkillList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };

        this.modalToggle = this.modalToggle.bind(this);
    }

    modalToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="outer">
                <h1 className="mt-5 mb-3">技能列表</h1>
                <ListGroup className="w-100 mb-3">
                <MultipleFilter title="分類" options={categoryOptions} defaultIndex={0}/>
                <MultipleFilter title="順序" options={orderingOptions} defaultIndex={0}/>
                </ListGroup>
                <Row>
                    <SkillListItem modalToggle={this.modalToggle}/>
                    <SkillListItem modalToggle={this.modalToggle}/>
                    <SkillListItem modalToggle={this.modalToggle}/>
                    <SkillListItem modalToggle={this.modalToggle}/>
                </Row>
                <Skill isOpen={this.state.isOpen} toggle={this.modalToggle}/>
            </div>

        );
    }
}
