import React, {Component} from 'react';
import {Row, Col, Button, ButtonGroup, Table} from 'reactstrap';

import './User.css';
import WorkshopListItem from '../Workshop/WorkshopListItem';
import SkillListItem from '../Skill/SkillListItem';
import WorkshopItem from './WorkshopItem';

export default class User extends Component {
    render() {
        return (
            <div className="outer">
                <div className="user-author">
                    <img className="user-author-img" src="https://scontent-tpe1-1.xx.fbcdn.net/v/t31.0-8/14876496_1735976403393352_4070401399338628514_o.jpg?oh=0ff4f0965c69809a048ea68c7dfb5836&oe=59C71556" alt=""/>
                    <h4>賴詰凱</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, in impedit ut dolores sint facere. Deserunt beatae voluptate natus architecto suscipit deleniti provident labore laboriosam! Sunt deserunt velit odit, sapiente.</p>
                </div>
                <Row>
                    <WorkshopItem/>
                    <WorkshopItem/>
                    <WorkshopItem/>
                    <WorkshopItem/>
                </Row>
            </div>
        );
    }
}
