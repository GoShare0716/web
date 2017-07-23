import React, {Component} from 'react';
import {Row} from 'reactstrap';

import './User.css';
import UserProfile from './UserProfile';
import UserWorkshopItem from './UserWorkshopItem';
import UserSkillItem from './UserSkillItem';
import UserEquip from './UserEquip';

export default class User extends Component {
    render() {
        return (
            <div className="outer user">
                <UserProfile/>
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
                <div className="user-attend">
                    <h3>我想學的技能</h3>
                    <hr/>
                    <Row>
                        <UserSkillItem/>
                        <UserSkillItem/>
                        <UserSkillItem/>
                        <UserSkillItem/>
                    </Row>
                </div>
                <div className="user-attend">
                    <h3>我會的技能</h3>
                    <hr/>
                    <Row>
                        <UserSkillItem/>
                        <UserSkillItem/>
                        <UserSkillItem/>
                        <UserSkillItem/>
                        <UserEquip/>
                    </Row>
                </div>

            </div>
        );
    }
}
