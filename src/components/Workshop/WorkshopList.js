import React, {Component} from 'react';
import {ListGroup, InputGroup, Input, InputGroupButton, Row} from 'reactstrap';
import MultipleFilter from '../Utils/MultipleFilter';
import WorkshopListItem from './WorkshopListItem';

const categoryOptions = ['全部', '科技', '美學'];
const orderingOptions = ['熱門', '字母順序'];
const stateOptions = ['全部', '調查中', '已達標', '已結束'];

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
                    <MultipleFilter title="分類" options={categoryOptions} defaultIndex={0}/>
                    <MultipleFilter title="順序" options={orderingOptions} defaultIndex={0}/>
                    <MultipleFilter title="狀態" options={stateOptions} defaultIndex={0}/>
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
