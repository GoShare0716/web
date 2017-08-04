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
            basic,
            advanced,
            voteLevel
        } = this.props;
        const defaultCheckedIndex = {
                'null': -1,
                'basic': 0,
                'advanced': 1
            }[voteLevel],
            progress = [
                basic.number / (basic.number + advanced.number) * 100,
                advanced.number / (basic.number + advanced.number) * 100
            ];
        return (
            <Col className="mb-3" xs={12} lg={6}>
                <Card onClick={e => history.push(`/skill/${id}`)} className="skill-list-item">
                    <CardBlock>
                        <CardTitle>{name}</CardTitle>
                        <CardText className="card-intro">{description}</CardText>
                        <Vote col={1} defaultCheckedIndex={defaultCheckedIndex} progress={progress} title={VOTE_TITLE} friends={[basic.friends, advanced.friends]} number={[basic.number, advanced.number]}/>
                    </CardBlock>
                </Card>
            </Col>
        );
    }
}
