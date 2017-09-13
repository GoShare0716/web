import './Vote.css';

import {Col, Row, Table} from 'reactstrap';
import React, {Component} from 'react';

import {Link} from 'react-router-dom';

const VOTE_OPTIONS = [
    '攝影入門',
    '網頁設計入門',
    '書法入門',
    'Arduino 入門',
    'Photoshop 入門',
    '機器學習應用入門',
    'After Effects 動畫視覺效果',
    '機器學習理論入門',
    'Illustrator 插畫設計',
    '學習科學入門'
];

class Vote extends Component {


    renderOptions() {
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th className="vote-result-topic">本期主題 9.12 - 9.24</th>
                    </tr>
                </thead>
                <tbody>
                    {VOTE_OPTIONS.map(o => {
                        return (
                            <tr>
                                <td>{o}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    }

    render() {
        return (
            <div className="inner my-5">
                <h1 className="mb-3">主題票選</h1>
                <h4 className="mb-3">
                    <a href="https://www.facebook.com/groups/113691139345877/" target="_blank" rel="noopener noreferrer">點我提名、投票</a>
                </h4>
                {this.renderOptions()}
                <h4>
                    <a href="https://www.facebook.com/groups/113691139345877/" target="_blank" rel="noopener noreferrer">點我提名、投票</a>
                </h4>
            </div>
        );
    }

}

export default Vote;
