import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {listWorkshop} from '../../actions/workshop';

import {ListGroup, InputGroup, Input, InputGroupButton, Row} from 'reactstrap';
import MultipleFilter from '../Utils/MultipleFilter';
import WorkshopListItem from './WorkshopListItem';

const categoryOptions = [['全部', 'all'], ['科技', 'technology'], ['美學', 'aesthetics']];
const orderingOptions = [['熱門', 'hot'], ['最新', 'new'], ['最近', 'date']];
const stateOptions = [['全部', 'all'], ['調查中', 'investigating'], ['已達標', 'reached'], ['已結束', 'over']];

class Workshop extends Component {
    componentWillMount() {
        this.props.listWorkshop();

    }

    renderWorkshopItem() {
        return this.props.workshopList.map(workshopItem => <WorkshopListItem key={workshopItem.id} {...workshopItem}/>)
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
                    <MultipleFilter title="分類" options={categoryOptions} defaultOption={'all'}/>
                    <MultipleFilter title="順序" options={orderingOptions} defaultOption={'hot'}/>
                    <MultipleFilter title="狀態" options={stateOptions} defaultOption={'all'}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Workshop);
