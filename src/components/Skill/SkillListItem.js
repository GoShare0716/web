import React, {Component} from 'react';
import {history} from '../../utils';
import {Col, Card, CardText, CardBlock, CardTitle} from 'reactstrap';

import Vote from '../Utils/Vote';
import './SkillListItem.css';

const VOTE_TITLE = ['我想入門', '我想精進'];

export default class SkillListItem extends Component {
    static defaultProps = {
        id: 2,
        name: 'C/C++',
        description: 'C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。'
    }

    render() {
        let {
            id,
            name,
            description,
            vote
        } = this.props;
        return (
            <Col className="mb-3" xs={12} lg={6}>
                <Card onClick={e => history.push(`/skill/${id}`)} className="skill-list-item">
                    <CardBlock>
                        <CardTitle>{name}</CardTitle>
                        <CardText className="card-intro">{description}</CardText>
                        <Vote col={1} title={VOTE_TITLE} vote={vote}/>
                    </CardBlock>
                </Card>
            </Col>
        );
    }
}
