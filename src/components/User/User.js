import React, {Component} from 'react';
import {Row, Col, Button, ButtonGroup, Table} from 'reactstrap';

import './User.css';
import WorkshopListItem from '../Workshop/WorkshopListItem';
import SkillListItem from '../Skill/SkillListItem';
import WorkshopItem from './WorkshopItem';

import SkillItemLearn from './SkillItemLearn';
import SkillItemEquip from './SkillItemEquip';
import SkillEquip from './SkillEquip';

export default class User extends Component {
    render() {
        return (
            <div className="outer user">
                <div className="user-author">
                    <img className="user-author-img" src="https://scontent-tpe1-1.xx.fbcdn.net/v/t31.0-8/14876496_1735976403393352_4070401399338628514_o.jpg?oh=0ff4f0965c69809a048ea68c7dfb5836&oe=59C71556" alt=""/>
                    <h4>賴詰凱</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, in impedit ut dolores sint facere. Deserunt beatae voluptate natus architecto suscipit deleniti provident labore laboriosam! Sunt deserunt velit odit, sapiente.</p>
                </div>
                <div className="user-propose">
                    <h3>我主辦的工作坊</h3>
                    <hr/>
                    <Row>
                        <WorkshopItem/>
                        <WorkshopItem/>
                    </Row>
                </div>
                <div className="user-attend">
                    <h3>我報名的工作坊</h3>
                    <hr/>
                    <Row>
                        <WorkshopItem/>
                        <WorkshopItem/>
                        <WorkshopItem/>
                        <WorkshopItem/>
                    </Row>
                </div>
                <div className="user-attend">
                    <h3>我想學的技能</h3>
                    <hr/>
                    <Row>
                        <SkillItemLearn/>
                        <SkillItemLearn/>
                        <SkillItemLearn/>
                        <SkillItemLearn/>
                    </Row>
                </div>
                <div className="user-attend">
                    <h3>我會的技能</h3>
                    <hr/>
                    <Row>
                        <SkillItemEquip/>
                        <SkillItemEquip/>
                        <SkillItemEquip/>
                        <SkillItemEquip/>
                        <SkillEquip/>
                    </Row>
                </div>

            </div>
        );
    }
}
