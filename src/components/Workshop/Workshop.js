import 'moment/locale/zh-tw';
import './Workshop.css'

import {Col, Jumbotron, Row} from 'reactstrap';
import React, {Component} from 'react';

import AttendButton from '../Utils/AttendButton';
import {Link} from 'react-router-dom';
import Profile from '../Utils/Profile';
import ProgressBar from '../Utils/ProgressBar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import moment from 'moment';
import renderHTML from 'react-render-html';
import {viewWorkshop} from '../../actions/workshop';








class Workshop extends Component {
    componentWillMount() {
        const {id} = this.props.match.params;
        this.props.viewWorkshop(id);
    }

    render() {
        let {
            id,
            phase,
            author,
            isAuthor,
            imageUrl,
            title,
            goal,
            requirement,
            targetAudience,
            startDatetime,
            endDatetime,
            location,
            prePrice,
            price,
            minNumber,
            maxNumber,
            deadline,
            closing,
            description,
            content,
            attendedMsg,
            attendees,
            attended,
            canceled
        } = this.props.workshopView;
        const role = localStorage.getItem('role');

        let preTitle,
            targetText,
            targetNumber,
            restDayText,
            restDayNumber,
            progressBarColor,
            priceText,
            priceNumber;

        switch (phase) {
            case 'judging':
                preTitle = '【審核中】';
                break;
            case 'judge_na':
                preTitle = '【審核失敗】';
                break;
            case 'investigating':
                preTitle = '';
                targetText = '達標人數';
                targetNumber = minNumber;
                restDayText = '調查倒數';
                restDayNumber = moment(deadline).fromNow(true);
                progressBarColor = '#0275d8';
                priceText = '募課預售價';
                priceNumber = prePrice;
                break;
            default:
                preTitle = '';
                targetText = '人數上限';
                targetNumber = maxNumber;
                restDayText = '報名倒數';
                restDayNumber = moment(closing).fromNow(true);
                progressBarColor = '#5cb85c';
                priceText = '門票';
                priceNumber = price;
        }

        return (
            <div className="full workshop">
                <div className="workshop-profile" style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, .6)), url(${imageUrl})`
                }}>
                    <Profile className="inner" profile={author}>
                        {(role === 'admin' || isAuthor) && <Link to={`/workshop/${id}/update`} className="btn btn-secondary mr-2">編輯</Link>}
                        {(role === 'admin' || isAuthor) && <Link to={`/workshop/${id}/manage`} className="btn btn-secondary">管理</Link>}
                    </Profile>
                </div>
                <div className="inner workshop-article">
                    <h1>{preTitle}{title}</h1>
                    {phase !== 'judging' && phase !== 'judge_na' && <Jumbotron className="workshop-progress">
                        <Row className="text-center mb-2">
                            <Col xs={6} sm={3}>
                                <small>報名人數</small>
                                <h3>{`${attendees.number} 人`}</h3>
                            </Col>
                            <Col xs={6} sm={3}>
                                <small>{targetText}</small>
                                <h3>{`${targetNumber} 人`}</h3>
                            </Col>
                            <Col xs={6} sm={3}>
                                <small>還需要</small>
                                <h3>{`${targetNumber - attendees.number} 人`}</h3>
                            </Col>
                            <Col xs={6} sm={3}>
                                <small>{restDayText}</small>
                                <h3>{restDayNumber}</h3>
                            </Col>
                        </Row>
                        <ProgressBar className="mb-2" height={'0.5rem'} color={progressBarColor} value={attendees.number * 100 / targetNumber}/>
                        <Row className="text-center">
                            {phase === 'investigating' && <Col>
                                <small>達標後售價</small>
                                <h3>
                                    <del>{`NT$${price}`}</del>
                                </h3>
                            </Col>}
                            <Col>
                                <small>{priceText}</small>
                                <h3>{`NT$${priceNumber}`}</h3>
                            </Col>
                        </Row>
                    </Jumbotron>}
                    {phase !== 'judging' && phase !== 'judge_na' && <div className="workshop-progress-attend">
                        <AttendButton id={id} phase={phase} attended={attended} canceled={canceled} attendees={attendees}/>
                    </div>}
                    <div className="workshop-info">
                        <h3>工作坊資訊</h3>
                        <ul>
                            <li>{`時間：${moment(startDatetime).format('YYYY-MM-DD(dd) hh:mm')} ~ ${moment(endDatetime).format('YYYY-MM-DD(dd) hh:mm')} (GMT+8)`}</li>
                            <li>{`地點：${location}`}</li>
                        </ul>
                    </div>
                    <div>
                        <h3>你將學會...</h3>
                        <ul>{goal.map((g, i) => <li key={i}>{g}</li>)}</ul>
                    </div>
                    <div className="workshop-requirement">
                        <h3>你需要具備...</h3>
                        <ul>{requirement.map((r, i) => <li key={i}>{r}</li>)}</ul>
                    </div>
                    <div className="workshop-target-audience">
                        <h3>這堂課適合給...</h3>
                        <ul>{targetAudience.map((t, i) => <li key={i}>{t}</li>)}</ul>
                    </div>
                    <div className="workshop-description">
                        <h3>簡介</h3>
                        {renderHTML(description)}
                    </div>
                    <div className="workshop-content">
                        <h3>詳細介紹</h3>
                        {renderHTML(content)}
                    </div>
                    <Jumbotron id="workshop-attend" className="workshop-attend">
                        <h3>注意事項</h3>
                        <ol>
                            <li>人數在 7 天內達標才會開課，歡迎分享給有興趣參加的同學。</li>
                            <li>若沒有達標，將以 Email 通知參加者。</li>
                            <li>若臨時無法參與工作坊，請儘早取消報名！</li>
                            <li>取消報名後，無法再次報名。</li>
                            <li>報名成功後，請填寫課前調查，以供講師安排工作坊內容。</li>
                        </ol>
                        {attended && !canceled && <h3>行前通知</h3>}
                        {attended && !canceled && renderHTML(attendedMsg)}
                        <AttendButton id={id} phase={phase} attended={attended} canceled={canceled} attendees={attendees}/>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}

function mapStateToProps({workshopView}) {
    return {workshopView};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        viewWorkshop
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Workshop);
