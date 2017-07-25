import React, {Component} from 'react';
import {ListGroup, InputGroup, Input, InputGroupButton, Row} from 'reactstrap';
import MultipleFilter from '../Utils/MultipleFilter';
import WorkshopListItem from './WorkshopListItem';

const categoryOptions = [['全部', 'all'], ['科技', 'technology'], ['美學', 'aesthetics']];
const orderingOptions = [['熱門', 'hot'], ['最新', 'new'], ['最近', 'date']];
const stateOptions = [['全部', 'all'], ['調查中', 'investigating'], ['已達標', 'reached'], ['已結束', 'over']];

export default class Workshop extends Component {
    render() {
        return (
            <div className="outer">
                <h1 className="mt-5 mb-3">工作坊</h1>
                <InputGroup className="mb-3">
                    <Input placeholder="搜尋喜歡的工作坊"/>
                    <InputGroupButton color="primary">搜尋</InputGroupButton>
                </InputGroup>
                <ListGroup className="mb-3">
                    <MultipleFilter title="分類" options={categoryOptions} defaultOption={'all'}/>
                    <MultipleFilter title="順序" options={orderingOptions} defaultOption={'hot'}/>
                    <MultipleFilter title="狀態" options={stateOptions} defaultOption={'all'}/>
                </ListGroup>
                <Row>
                    <WorkshopListItem/>
                    <WorkshopListItem/>
                    <WorkshopListItem/>
                    <WorkshopListItem/>
                </Row>
            </div>
        );
    }
}
