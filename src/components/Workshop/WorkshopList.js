import './WorkshopList.css';

import React, {Component} from 'react';

import {Row} from 'reactstrap';
import SkeletonWorkshopItem from '../Skeleton/SkeletonWorkshopItem';
import WorkshopItem from '../Utils/WorkshopItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {listWorkshop} from '../../actions/workshop';

class WorkshopList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            category: 'all',
            ordering: 'hot',
            phase: localStorage.getItem('role') === 'admin'
                ? 'admin'
                : 'all'
        };
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.performSearch = this.performSearch.bind(this);
    }

    componentWillMount() {
        this.performSearch(this.state);
    }

    render() {
        const {loading} = this.props;
        return (
            <div className="full mb-5">
                <div className="workshop-list-banner">
                    <h1 className="mb-2">共學</h1>
                    <p className="lead m-0">專為學生設計的工作坊募資平台</p>
                </div>
                <div className="outer mt-5">
                    {this.renderWorkshopItem(loading)}
                </div>
            </div>
        );
    }

    onSearchSubmit(e) {
        e.preventDefault();
        this.performSearch(this.state);
    }

    onFilterChange(nextState) {
        this.setState(nextState, () => this.performSearch(this.state));
    }

    performSearch({searchText, category, ordering, phase}) {
        this.props.listWorkshop(searchText, category, ordering, phase);
    }

    renderWorkshopItem(loading) {
        if (loading) {
            return (
                <Row>
                    <SkeletonWorkshopItem/>
                    <SkeletonWorkshopItem/>
                    <SkeletonWorkshopItem/>
                    <SkeletonWorkshopItem/>
                    <SkeletonWorkshopItem/>
                    <SkeletonWorkshopItem/>
                </Row>
            );
        }
        return (
            <Row>
                {this.props.workshopList.map((w, i) => <WorkshopItem key={i} {...w}/>)}
            </Row>
        );
    }
}

function mapStateToProps({workshopList, loadingBar}) {
    return {workshopList, loading: loadingBar};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        listWorkshop
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopList);
