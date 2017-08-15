import 'moment/locale/zh-tw';
import './Workshop.css'

import {Button, Jumbotron} from 'reactstrap';
import React, {Component} from 'react';

import AttendButton from '../Utils/AttendButton';
import AttendedJumbotron from '../Utils/AttendedJumbotron';
import Profile from '../Utils/Profile';
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
        let currentPrice = phase === 'investigating'
            ? prePrice
            : price;
        return (
            <div className="full workshop">
                <Profile className="inner" profile={author}>
                    {isAuthor && <Button onClick={e => history.push(`/workshop/${id}/update`)} className="mr-2">編輯</Button>}
                    {isAuthor && <Button onClick={e => history.push(`/workshop/${id}/manage`)}>管理</Button>}
                </Profile>
                <div className="banner-container">
                    <img className="w-100 banner" src={imageUrl} alt=""/>
                </div>
                <div className="inner article">
                    <h1>{title}</h1>
                    <Jumbotron className="goal">
                        <h3>你將學會...</h3>
                        <ul>{goal.map((g, i) => <li key={i}>{g}</li>)}</ul>
                        <AttendButton id={id} attended={attended} canceled={canceled} attendees={attendees}/>
                    </Jumbotron>
                    <div className="requirement">
                        <h3>你需要具備...</h3>
                        <ul>{requirement.map((r, i) => <li key={i}>{r}</li>)}</ul>
                    </div>
                    <div className="target-audience">
                        <h3>這堂課適合給...</h3>
                        <ul>{targetAudience.map((t, i) => <li key={i}>{t}</li>)}</ul>
                    </div>
                    <div className="info">
                        <h3>工作坊資訊</h3>
                        <ul>
                            <li>{`時間：${moment(startDatetime).format('YYYY-MM-DD(dd) hh:mm')} ~ ${moment(endDatetime).format('YYYY-MM-DD(dd) hh:mm')} (GMT+8)`}</li>
                            <li>{`地點：${location}`}</li>
                            <li>{`費用：${currentPrice} 元`}</li>
                            <li>{`報名人數：${attendees.number} 人`}</li>
                            <li>{`達標人數：${minNumber} 人`}</li>
                            <li>{`人數上限：${maxNumber} 人`}</li>
                            <li>{`調查倒數：${moment(deadline).fromNow(true)}`}</li>
                            <li>{`報名倒數：${moment(closing).fromNow(true)}`}</li>
                        </ul>
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
