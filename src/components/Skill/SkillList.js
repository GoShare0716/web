import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route} from 'react-router-dom';
import {history} from '../../utils';
import {ListGroup, Row} from 'reactstrap';

import {listSkill} from '../../actions/skill';

import MultipleFilter from '../Utils/MultipleFilter';
import SkillListItem from './SkillListItem';
import VoteListItem from './VoteListItem';
import Skill from './Skill';

const categoryOptions = [
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

class SkillList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };

        this.modalToggle = this.modalToggle.bind(this);
    }

    componentWillMount() {
        this.props.listSkill();
    }

    modalToggle() {
        if (this.state.isOpen) {
            this.setState({
                isOpen: true
            }, e => history.push('/skill'));
        } else {
            this.setState({isOpen: true});
        }
    }

    renderSkillListItem() {
        return this.props.skillList.map((s, i) => <VoteListItem key={i} rank={i + 1} {...s}/>);
    }

    render() {
        return (
            <div className="outer">
                <h1 className="mt-5">技能票選</h1>
                <h5 className="mb-3">想學什麼？我們找人來教！</h5>
                <ListGroup className="w-100 mb-3">
                    <MultipleFilter title="分類" options={categoryOptions} defaultOption={'technology'} optionOnClick={selectedOption => console.log(selectedOption)}/>
                </ListGroup>
                <Row>
                    {this.renderSkillListItem()}
                </Row>
                <Route path='/skill/:id' render={props => <Skill {...props} isOpen={this.state.isOpen} toggle={this.modalToggle}/>}/>
            </div>
        );
    }
}

function mapStateToProps({skillList}) {
    return {skillList};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        listSkill
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillList);
