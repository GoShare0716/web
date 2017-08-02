import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {viewUser} from '../../actions/user';
import {Row} from 'reactstrap';

import './User.css';
import UserProfile from './UserProfile';
import UserWorkshopItem from './UserWorkshopItem';
import UserSkillItem from './UserSkillItem';
import UserEquip from './UserEquip';

class User extends Component {
    componentDidMount() {
        this.props.viewUser();
    }

    render() {
        const {profile} = this.props.user;
        console.log(profile);
        return (
            <div className="outer user">
                <UserProfile profile={profile}/>
                <div className="user-propose">
                    <h3>我主辦的工作坊</h3>
                    <hr/>
                    <Row>
                        <UserWorkshopItem/>
                        <UserWorkshopItem/>
                    </Row>
                </div>
                <div className="user-attend">
                    <h3>我報名的工作坊</h3>
                    <hr/>
                    <Row>
                        <UserWorkshopItem/>
                        <UserWorkshopItem/>
                        <UserWorkshopItem/>
                        <UserWorkshopItem/>
                    </Row>
                </div>
                <div className="user-learn">
                    <h3>我想學的技能</h3>
                    <hr/>
                    <Row>
                        <UserSkillItem type="learn"/>
                        <UserSkillItem type="learn"/>
                        <UserSkillItem type="learn"/>
                        <UserSkillItem type="learn"/>
                    </Row>
                </div>
                <div className="user-equip">
                    <h3>我會的技能</h3>
                    <hr/>
                    <Row>
                        <UserSkillItem type="equip"/>
                        <UserSkillItem type="equip"/>
                        <UserSkillItem type="equip"/>
                        <UserSkillItem type="equip"/>
                        <UserEquip/>
                    </Row>
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
