import 'moment/locale/zh-tw';
import './Workshop.css'

import {Badge, Col, Jumbotron, Row} from 'reactstrap';
import React, {Component} from 'react';

import AttendButton from '../Utils/AttendButton';
import {Link} from 'react-router-dom';
import Profile from '../Utils/Profile';
import ProgressBar from '../Utils/ProgressBar';
import SkeletonWorkshop from '../Skeleton/SkeletonWorkshop';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {deliverAlert} from '../../actions/alert';
import moment from 'moment';
import renderHTML from 'react-render-html';
import {viewWorkshop} from '../../actions/workshop';









class Workshop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAlertNotPublished: false
        };
    }

    componentWillMount() {
        const {viewWorkshop, match} = this.props;
        const {id} = match.params;
        viewWorkshop(id);
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.loading && !this.state.isAlertNotPublished && !nextProps.workshopView.published) {
            this.props.deliverAlert('工作坊尚未發佈！請至「管理工作坊」頁面設定。', 'warning', 5000);
            this.setState({isAlertNotPublished: true});
        }
    }

    render() {
        if (this.props.loading) {
            return <SkeletonWorkshop/>
        }

        const {
            id,
            phase,
            author,
            isAuthor,
            imageUrl,
            title,
            startDatetime,
            endDatetime,
            prePrice,
            price,
            minNumber,
            maxNumber,
            deadline,
            closing,
            goal,
            requirement,
            targetAudience,
            location,
            description,
            content,
            attendedMsg,
            attendees: {
                friends,
                number
            },
            attended,
            canceled
        } = this.props.workshopView;
        const role = localStorage.getItem('role');

        let badgeText,
            badgeColor,
            targetText,
            targetNumber,
            restNumberText,
            restDayText,
            restDayNumber,
            progressBarColor,
            priceText,
            priceNumber;

        switch (phase) {
            case 'judging':
                badgeText = '審核中';
                badgeColor = 'warning';
                break;
            case 'judge_na':
                badgeText = '未通過';
                badgeColor = 'danger';
                break;
            case 'investigating':
                badgeText = '募資中';
                badgeColor = 'primary';
                targetText = '達標人數';
                targetNumber = minNumber;
                restNumberText = '距達標還有';
                restDayText = '募資倒數';
                restDayNumber = moment(deadline).fromNow(true);
                progressBarColor = '#0275d8';
                priceText = prePrice === price
                    ? '門票'
                    : '早鳥優惠價';
                priceNumber = prePrice === 0
                    ? '免費'
                    : `NT$${prePrice}`;
                break;
            case 'over':
                badgeText = '已結束';
                badgeColor = 'default';
                targetText = '人數上限';
                targetNumber = maxNumber;
                restNumberText = '剩餘座位';
                restDayText = '工作坊倒數';
                restDayNumber = '已結束';
                progressBarColor = '#5cb85c';
                priceText = '門票';
                priceNumber = price === 0
                    ? '免費'
                    : `NT$${price}`;
                break;
            case 'full':
            case 'closing':
                badgeText = phase === 'full'
                    ? '已額滿'
                    : '報名截止';
                badgeColor = 'success';
                targetText = '人數上限';
                targetNumber = maxNumber;
                restNumberText = '剩餘座位';
                restDayText = '工作坊倒數';
                restDayNumber = moment(startDatetime).fromNow(true);
                progressBarColor = '#5cb85c';
                priceText = '門票';
                priceNumber = price === 0
                    ? '免費'
                    : `NT$${price}`;
                break;
            case 'reached':
                badgeText = '確定舉辦';
                badgeColor = 'success';
                targetText = '人數上限';
                targetNumber = maxNumber;
                restNumberText = '剩餘座位';
                restDayText = '報名倒數';
                restDayNumber = moment(closing).fromNow(true);
                progressBarColor = '#5cb85c';
                priceText = '門票';
                priceNumber = price === 0
                    ? '免費'
                    : `NT$${price}`;
                break;
            case 'unreached':
                badgeText = '未達標';
                badgeColor = 'default';
                targetText = '達標人數';
                targetNumber = minNumber;
                restNumberText = '距達標還有';
                restDayText = '募資倒數';
                restDayNumber = '未達標';
                progressBarColor = '#0275d8';
                priceText = prePrice === price
                    ? '門票'
                    : '早鳥優惠價';
                priceNumber = prePrice === 0
                    ? '免費'
                    : `NT$${prePrice}`;
                break;
            default:
        }

        let infoDatetime,
            infoCalendar;
        if (moment(startDatetime).format('YYYY-MM-DD') === moment(endDatetime).format('YYYY-MM-DD')) {
            infoDatetime = `${moment(startDatetime).format('YYYY-MM-DD(dd) HH:mm')} ~ ${moment(endDatetime).format('HH:mm')}`;
        } else {
            infoDatetime = `${moment(startDatetime).format('YYYY-MM-DD(dd) HH:mm')} ~ ${moment(endDatetime).format('YYYY-MM-DD(dd) HH:mm')}`;
        }
        infoCalendar = `http://www.google.com/calendar/event?action=TEMPLATE&text=${title}&dates=${moment(startDatetime).toISOString().replace(/-|:|\.\d\d\d/g, "")}/${moment(endDatetime).toISOString().replace(/-|:|\.\d\d\d/g, "")}&details=${title}&location=${location}&ctz=Asia/Taipei`;

        return (
            <div className="full workshop mb-5">
                <div className="workshop-profile" style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, .6)), url(${imageUrl})`
                }}>
                    <Profile className="inner" profile={author}>
                        {(role === 'admin' || isAuthor) && <div className="mt-2">
                            <Link to={`/workshop/${id}/update`} className="btn btn-secondary mr-2">編輯工作坊</Link>
                            <Link to={`/workshop/${id}/manage`} className="btn btn-secondary">管理工作坊</Link>
                        </div>}
                    </Profile>
                </div>
                <div className="inner workshop-article">
                    <Badge className="workshop-badge" color={badgeColor}>{badgeText}</Badge>
                    <h1>{title}</h1>
                    {phase !== 'judging' && phase !== 'judge_na' && <div>
                        <Jumbotron className="workshop-state">
                            <Row className="text-center mb-2">
                                <Col xs={6} sm={3}>
                                    <small>參加人數</small>
                                    <h3>{`${number} 人`}</h3>
                                </Col>
                                <Col xs={6} sm={3}>
                                    <small>{targetText}</small>
                                    <h3>{`${targetNumber} 人`}</h3>
                                </Col>
                                <Col xs={6} sm={3}>
                                    <small>{restNumberText}</small>
                                    <h3>{`${targetNumber - number} 人`}</h3>
                                </Col>
                                <Col xs={6} sm={3}>
                                    <small>{restDayText}</small>
                                    <h3>{restDayNumber}</h3>
                                </Col>
                            </Row>
                            <ProgressBar className="mb-2" height={'0.5rem'} color={progressBarColor} value={number * 100 / targetNumber}/>
                            <Row className="text-center">
                                {(phase === 'investigating' || phase === 'unreached') && (price !== prePrice) && <Col>
                                    <small>達標後售價</small>
                                    <h3>
                                        <del>{price === 0
                                                ? '免費'
                                                : `NT$${price}`}</del>
                                    </h3>
                                </Col>}
                                <Col>
                                    <small>{priceText}</small>
                                    <h3>{priceNumber}</h3>
                                </Col>
                            </Row>
                        </Jumbotron>
                        <div className="workshop-state-attend">
                            <AttendButton id={id} phase={phase} attended={attended} canceled={canceled} friends={friends}/>
                        </div>
                    </div>}
                    {phase !== 'judging' && phase !== 'judge_na' && <div className="workshop-info">
                        <h3>工作坊資訊</h3>
                        <ul>
                            <li>{`時間：${infoDatetime} `}
                                <a href={infoCalendar} target="_blank">加入行事曆</a>
                            </li>
                            <li>{`地點：${location}`}</li>
                        </ul>
                    </div>}
                    <div>
                        <h3>你將學會...</h3>
                        <ul>{goal.map((g, i) => <li key={i}>{g}</li>)}</ul>
                    </div>
                    <div>
                        <h3>你需要具備...</h3>
                        <ul>{requirement.map((r, i) => <li key={i}>{r}</li>)}</ul>
                    </div>
                    <div>
                        <h3>這堂課適合給...</h3>
                        <ul>{targetAudience.map((t, i) => <li key={i}>{t}</li>)}</ul>
                    </div>
                    {phase !== 'judging' && phase !== 'judge_na' && <div>
                        {renderHTML(description)}
                    </div>}
                    {phase !== 'judging' && phase !== 'judge_na' && <div>
                        {renderHTML(content)}
                    </div>}
                    <Jumbotron id="workshop-attend">
                        <h3>注意事項</h3>
                        <ol>
                            <li>人數達標後才會開課。無論是否達標，都會以 Email 通知。</li>
                            <li>若臨時無法參加工作坊，請儘早取消報名，將機會讓給其他同學。</li>
                            <li>付費工作坊請於當天繳交門票費用。</li>
                        </ol>
                        {attended && !canceled && <h3>行前通知</h3>}
                        {attended && !canceled && renderHTML(attendedMsg)}
                        <AttendButton id={id} phase={phase} attended={attended} canceled={canceled} friends={friends}/>
                    </Jumbotron>
                    <h3 className="mb-2">討論區</h3>
                    <div className="fb-comments" data-href={`https://goshare.life/workshop/${id}`} data-width="100%" data-numposts="5"></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({workshopView, loadingBar}) {
    return {workshopView, loading: loadingBar};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        viewWorkshop,
        deliverAlert
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Workshop);
