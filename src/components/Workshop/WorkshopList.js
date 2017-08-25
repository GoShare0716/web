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
const PHASE_OPTIONS = [
    {
        text: '全部',
        value: 'all'
    }, {
        text: '募資中',
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
            phase: 'all'
        };
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.performSearch = this.performSearch.bind(this);
    }

    componentWillMount() {
        this.performSearch(this.state);
    }

    render() {
        let phaseOptions;
        if (localStorage.getItem('role') === 'admin') {
            phaseOptions = [
                ...PHASE_OPTIONS, {
                    text: '管理員',
                    value: 'admin'
                }
            ];
        } else {
            phaseOptions = PHASE_OPTIONS;
        }
        const {category, ordering, phase} = this.state;
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
                    <MultipleFilter label="分類" options={CATEGORY_OPTIONS} value={category} onChange={option => this.onFilterChange({category: option})}/>
                    <MultipleFilter label="順序" options={ORDERING_OPTIONS} value={ordering} onChange={option => this.onFilterChange({ordering: option})}/>
                    <MultipleFilter label="狀態" options={phaseOptions} value={phase} onChange={option => this.onFilterChange({phase: option})}/>
                </ListGroup>
                <Row>{this.props.workshopList.map((w, i) => <WorkshopItem key={i} {...w}/>)}</Row>
            </div>
        );
    }

    onSearchSubmit(e) {
        e.preventDefault();
        this.performSearch(this.state);
    }

    onFilterChange(nextState) {
        this.setState(nextState, () => this.performSearch(nextState));
    }

    performSearch({seartchText, category, ordering, phase}) {
        this.props.listWorkshop(seartchText, category, ordering, phase);
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
