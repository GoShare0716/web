import 'moment/locale/zh-tw';
import './Workshop.css'

import {Button, Col, Jumbotron, Row} from 'reactstrap';
import React, {Component} from 'react';

import AttendButton from '../Utils/AttendButton';
import AttendedJumbotron from '../Utils/AttendedJumbotron';
import Profile from '../Utils/Profile';
import ProgressBar from '../Utils/ProgressBar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {history} from '../../utils';
import moment from 'moment';
import renderHTML from 'react-render-html';
import {viewWorkshop} from '../../actions/workshop';








class Workshop extends Component {
    static defaultProps = {
        id: 2
    }

    componentWillMount() {
        this.props.viewWorkshop();
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

        let targetText,
            targetNumber,
            restDayText,
            restDayNumber,
            progressBarColor,
            priceText,
            priceNumber;

        switch (phase) {
            case 'investigating':
                targetText = '達標人數';
                targetNumber = minNumber;
                restDayText = '調查倒數';
                restDayNumber = moment(deadline).fromNow(true);
                progressBarColor = '#0275d8';
                priceText = '募課預售價';
                priceNumber = prePrice;
                break;
            default:
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
                        {isAuthor && <Button onClick={e => history.push(`/workshop/${id}/update`)} className="mr-2">編輯</Button>}
                        {isAuthor && <Button onClick={e => history.push(`/workshop/${id}/manage`)}>管理</Button>}
                    </Profile>
                </div>
                <div className="inner article">
                    <h1>{title}</h1>
                    <Jumbotron className="workshop-progress">
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
                    </Jumbotron>
                    <div className="workshop-progress-attend">
                        <AttendButton id={id} attended={attended} canceled={canceled} attendees={attendees}/>
                    </div>
                    <div className="info">
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
                    <div className="requirement">
                        <h3>你需要具備...</h3>
                        <ul>{requirement.map((r, i) => <li key={i}>{r}</li>)}</ul>
                    </div>
                    <div className="target-audience">
                        <h3>這堂課適合給...</h3>
                        <ul>{targetAudience.map((t, i) => <li key={i}>{t}</li>)}</ul>
                    </div>
                    <div className="description">
                        <h3>簡介</h3>
                        {renderHTML(description)}
                    </div>
                    <div className="content">
                        <h3>詳細介紹</h3>
                        {renderHTML(content)}
                    </div>
                    <AttendedJumbotron id={id} attended={attended} canceled={canceled} attendees={attendees}/>
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
