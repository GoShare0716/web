import './User.css';

import React, {Component} from 'react';

import {Row} from 'reactstrap';
import UserProfile from './UserProfile';
import WorkshopListItem from '../Workshop/WorkshopListItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {viewUser} from '../../actions/user';





class User extends Component {
    componentDidMount() {
        this.props.viewUser();
    }

    render() {
        const {profile, createWorkshops, attendWorkshops} = this.props.user;
        return (
            <div className="outer user">
                <UserProfile profile={profile}/>
                <div className="user-propose">
                    <h3>我主辦的工作坊</h3>
                    <hr/>
                    <Row>{createWorkshops.map((c, i) => <WorkshopListItem key={c.id} {...c}/>)}</Row>
                </div>
                <div className="user-attend">
                    <h3>我報名的工作坊</h3>
                    <hr/>
                    <Row>{attendWorkshops.map((a, i) => <WorkshopListItem key={a.id} {...a}/>)}</Row>
                </div>
            </div>
        );
    }
}

function mapStateToProps({user}) {
    return {user};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        viewUser
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
