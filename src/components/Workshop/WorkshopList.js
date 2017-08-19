import {
    Button,
    Form,
    Input,
    InputGroup,
    InputGroupButton,
    ListGroup,
    Row
} from 'reactstrap';
import React, {Component} from 'react';

import MultipleFilter from '../Utils/MultipleFilter';
import WorkshopItem from '../Utils/WorkshopItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {listWorkshop} from '../../actions/workshop';





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
        text: '熱門程度',
        value: 'hot'
    }, {
        text: '由新到舊',
        value: 'new'
    }, {
        text: '即將開始',
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
            searchText: '',
            category: 'all',
            ordering: 'hot',
            state: 'all'
        };
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.performSearch = this.performSearch.bind(this);
    }

    onSearchSubmit(e) {
        e.preventDefault();
        this.performSearch();
    }

    onFilterChange(nextState) {
        this.setState(nextState, this.performSearch);
    }

    performSearch() {
        const {seartchText, category, ordering, state} = this.state;
        this.props.listWorkshop(seartchText, category, ordering, state);
    }

    componentWillMount() {
        const {seartchText, category, ordering, state} = this.state;
        this.props.listWorkshop(seartchText, category, ordering, state);
    }

    render() {
        return (
            <div className="outer">
                <h1 className="mt-5 mb-3">工作坊</h1>
                <Form className="mb-3" onSubmit={this.onSearchSubmit}>
                    <InputGroup>
                        <Input value={this.state.searchText} onChange={e => this.setState({searchText: e.target.value})} placeholder="搜尋喜歡的工作坊"/>
                        <InputGroupButton>
                            <Button color="primary" type="submit">搜尋</Button>
                        </InputGroupButton>
                    </InputGroup>
                </Form>
                <ListGroup className="mb-3">
                    <MultipleFilter label="分類" options={CATEGORY_OPTIONS} defaultOption={'all'} onChange={option => this.onFilterChange({category: option})}/>
                    <MultipleFilter label="順序" options={ORDERING_OPTIONS} defaultOption={'hot'} onChange={option => this.onFilterChange({ordering: option})}/>
                    <MultipleFilter label="狀態" options={STATE_OPTIONS} defaultOption={'all'} onChange={option => this.onFilterChange({state: option})}/>
                </ListGroup>
                <Row>{this.props.workshopList.map((w, i) => <WorkshopItem key={i} {...w}/>)}</Row>
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
