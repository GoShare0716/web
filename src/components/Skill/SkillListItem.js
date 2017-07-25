import React, {Component} from 'react';
import {
    Col,
    Card,
    CardText,
    CardBlock,
    CardTitle    
} from 'reactstrap';

import './SkillListItem.css';

import Vote from '../Utils/Vote';

export default class SkillListItem extends Component {
    render() {
        return (
            <Col className="mb-3" xs={12} lg={6}>
                <Card onClick={this.props.modalToggle} className="skill-list-item">
                    <CardBlock>
                        <CardTitle>C/C++</CardTitle>
                        <CardText>C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。</CardText>
                        <Vote col={1}/>
                    </CardBlock>
                </Card>
            </Col>
        );
    }
}
