import React, {Component} from 'react';
import {history} from '../../utils';
import {Col, Card, CardText, CardBlock, CardTitle} from 'reactstrap';

import './SkillListItem.css';

import Vote from '../Utils/Vote';

export default class SkillListItem extends Component {
    static defaultProps = {
        id: 2,
        title: 'C/C++',
        intro: 'C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。'
    }

    render() {
        let {id, title, intro} = this.props;
        return (
            <Col className="mb-3" xs={12} lg={6}>
                <Card onClick={e => history.push(`/skill/${id}`)} className="skill-list-item">
                    <CardBlock>
                        <CardTitle>{title}</CardTitle>
                        <CardText className="card-intro">{intro}</CardText>
                        <Vote col={1}/>
                    </CardBlock>
                </Card>
            </Col>
        );
    }
}
