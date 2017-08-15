import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {listWorkshop} from '../../actions/workshop';

import {ListGroup, InputGroup, Input, InputGroupButton, Row} from 'reactstrap';
import MultipleFilter from '../Utils/MultipleFilter';
import WorkshopListItem from './WorkshopListItem';

const CATEGORY_OPTIONS = [
    {
        text: '全部',
        value: 'all'
    }, {
        text: '科技',
        value: 'technology'
    }, {
        text: '美學',
        value: 'aesthetics'
    }
];
const ORDERING_OPTIONS = [
    {
        text: '熱門',
        value: 'hot'
    }, {
        text: '最新',
        value: 'new'
    }, {
        text: '最近',
        value: 'date'
    }
];
const STATE_OPTIONS = [
    {
        text: '全部',
        value: 'all'
    }, {
        text: '調查中',
        value: 'investigating'
    }, {
        text: '已達標',
        value: 'reached'
    }, {
        text: '已結束',
        value: 'over'
    }
];

class WorkshopList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'all',
            ordering: 'hot',
            state: 'all'
        };
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    onFilterChange(nextState) {
        this.setState(nextState);
        // TODO: this.props.listWorkshop(filter);
    }

    componentWillMount() {
        this.props.listWorkshop();
    }

    renderWorkshopItem() {
        return this.props.workshopList.map((w, i) => <WorkshopListItem key={i} {...w}/>)
    }

    render() {
        return (
            <div className="outer">
                <h1 className="mt-5 mb-3">工作坊</h1>
                <InputGroup className="mb-3">
                    <Input placeholder="搜尋喜歡的工作坊"/>
                    <InputGroupButton color="primary">搜尋</InputGroupButton>
                </InputGroup>
                <ListGroup className="mb-3">
                    <MultipleFilter label="分類" options={CATEGORY_OPTIONS} defaultOption={'all'} onChange={option => this.onFilterChange({category: option})}/>
                    <MultipleFilter label="順序" options={ORDERING_OPTIONS} defaultOption={'hot'} onChange={option => this.onFilterChange({ordering: option})}/>
                    <MultipleFilter label="狀態" options={STATE_OPTIONS} defaultOption={'all'} onChange={option => this.onFilterChange({state: option})}/>
                </ListGroup>
                <Row>{this.renderWorkshopItem()}</Row>
            </div>
        );
    }
}

function mapStateToProps({workshopList}) {
    return {workshopList};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        listWorkshop
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopList);
