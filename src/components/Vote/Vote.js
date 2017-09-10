import './Vote.css';

import {Col, Row, Table} from 'reactstrap';
import React, {Component} from 'react';

import {Link} from 'react-router-dom';



const VOTE_RESULT = [
    {
        name: '第一期結果',
        table: [
            {
                name: '股票入門',
                number: 54,
                speaker: 'not-invite'
            }, {
                name: 'Illustrator 插畫設計入門',
                number: 28,
                speaker: 'seeking'
            }, {
                name: 'After Effects 影片製作',
                number: 21,
                speaker: 'seeking'
            }, {
                name: '電腦繪圖入門',
                number: 18,
                speaker: 'seeking'
            }, {
                name: '資料科學入門',
                number: 15,
                speaker: 'seeking'
            }, {
                name: 'Photoshop 修圖技巧',
                number: 11,
                speaker: 'seeking'
            }, {
                name: 'Python 入門',
                number: 8,
                speaker: 'seeking'
            }, {
                name: '手作甜點',
                number: 7,
                speaker: 'not-invite'
            }, {
                name: '簡報設計技巧',
                number: 7,
                speaker: 'seeking'
            }, {
                name: '攝影入門',
                number: 6,
                speaker: 'seeking'
            }
        ]
    }
];

class Vote extends Component {
    renderResult() {
        return VOTE_RESULT.map(({name, table}, i) => {
            return (
                <Col key={i} xs={12} md={6}>
                    <h2>{name}</h2>
                    <Table responsive>
                        <tbody>
                            <tr>
                                <td className="vote-result-topic">主題</td>
                                <td className="vote-result-number">票數</td>
                                <td className="vote-result-speaker">講者邀請</td>
                            </tr>
                            {table.map(({name, number, speaker}, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{name}</td>
                                        <td>{number}</td>
                                        <td>
                                            {speaker === 'not-invite'
                                                ? '暫不徵求'
                                                : <Link to="/create-workshop">徵求中</Link>}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Col>
            );
        });
    }

    render() {
        return (
            <div className="outer my-5">
                <h1 className="mb-3">主題票選</h1>
                <h2 className="mb-3">
                    <a href="https://www.facebook.com/groups/113691139345877/" target="_blank" rel="noopener noreferrer">點我進入票選活動</a>
                </h2>
                <Row>
                    {this.renderResult()}
                </Row>

            </div>
        );
    }

}

export default Vote;
