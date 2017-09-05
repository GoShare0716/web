import 'moment/locale/zh-tw';
import './WorkshopItem.css';

import {Badge, Card, CardBlock, CardImg, Col} from 'reactstrap';
import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import ProgressBar from '../Utils/ProgressBar';
import moment from 'moment';





class WorkshopItem extends Component {
    render() {
        const {
            phase,
            id,
            imageUrl,
            title,
            author: {
                name
            },
            attendees: {
                friends,
                number
            },
            deadline,
            closing,
            startDatetime,
            minNumber,
            maxNumber,
            prePrice,
            price
        } = this.props;

        let badge,
            badgeColor,
            progressBarValue,
            progressBarText,
            progressBarColor,
            priceDeletedText,
            priceText,
            priceColor;

        switch (phase) {
            case 'judging':
                badge = '審核中';
                badgeColor = 'warning';
                progressBarText = '';
                progressBarColor = '#f0ad4e';
                progressBarValue = 100;
                priceDeletedText = `NT$${price}`;
                priceText = `NT$${prePrice}`;
                priceColor = '#f0ad4e';
                break;
            case 'judge_na':
                badge = '未通過';
                badgeColor = 'danger';
                progressBarText = '';
                progressBarColor = '#d9534f';
                progressBarValue = 100;
                priceDeletedText = `NT$${price}`;
                priceText = `NT$${prePrice}`;
                priceColor = '#d9534f';
                break;
            case 'investigating':
                badge = `募資倒數 ${moment(deadline).fromNow(true)}`;
                badgeColor = 'primary';
                progressBarText = `還要 ${minNumber - number} 人達標`;
                progressBarColor = '#0275d8';
                progressBarValue = number * 100 / minNumber;
                priceDeletedText = price === prePrice
                    ? ''
                    : `NT$${price}`;
                priceText = prePrice === 0
                    ? '免費'
                    : `NT$${prePrice}`;
                priceColor = '#0275d8';
                break;
            case 'full':
            case 'reached':
                let rest = maxNumber - number;
                badge = rest === 0
                    ? `工作坊倒數 ${moment(startDatetime).fromNow(true)}`
                    : `報名倒數 ${moment(closing).fromNow(true)}`;
                badgeColor = 'success';
                progressBarText = rest === 0
                    ? '已額滿'
                    : `最後 ${rest} 個座位`;
                progressBarColor = '#5cb85c';
                progressBarValue = number * 100 / maxNumber;
                priceDeletedText = '';
                priceText = price === 0
                    ? '免費'
                    : `NT$${price}`;
                priceColor = '#5cb85c';
                break;
            case 'closing':
                badge = `工作坊倒數 ${moment(startDatetime).fromNow(true)}`;
                badgeColor = 'success';
                progressBarText = '報名截止';
                progressBarColor = '#5cb85c';
                progressBarValue = number * 100 / maxNumber;
                priceDeletedText = '';
                priceText = price === 0
                    ? '免費'
                    : `NT$${price}`;
                priceColor = '#5cb85c';
                break;
            case 'over':
            case 'unreached':
                badge = phase === 'over'
                    ? '已結束'
                    : '未達標';
                badgeColor = 'default';
                progressBarText = '';
                progressBarColor = 'primary';
                progressBarValue = 0;
                priceDeletedText = '';
                priceText = price === 0
                    ? '免費'
                    : `NT$${price}`;
                priceColor = '#AAA';
                break;
            default:
        }
        return (
            <Col className="mb-3" xs={12} sm={6} lg={4}>
                <Link to={`/workshop/${id}`} className="unlink">
                    <Card className="workshop-item">
                        <div className="embed-responsive embed-responsive-16by9">
                            <CardImg top className="workshop-item-image" src={imageUrl} alt=""/>
                        </div>
                        <Badge className="workshop-item-badge" color={badgeColor}>{badge}</Badge>
                        <CardBlock>
                            <h4 className="workshop-item-title mb-2">{title}</h4>
                            <div className="text-muted mb-2">
                                <span>{name}</span>
                                <span className="mx-1">·</span>
                                <span>{moment(startDatetime).format('M 月 D 日')}</span>
                                {friends.length > 0 && <span className="mx-1">·</span>}
                                {friends.length > 0 && <span>{`${friends.length} 位朋友`}</span>}
                            </div>
                            <ProgressBar className="mb-2" color={progressBarColor} value={progressBarValue} text={progressBarText}/>
                            <div className="workshop-item-price-container">
                                <span className="workshop-item-price-deleted mr-2">{priceDeletedText}</span>
                                <span className="workshop-item-price" style={{
                                    color: priceColor
                                }}>{priceText}</span>
                            </div>
                        </CardBlock>
                    </Card>
                </Link>
            </Col>
        );
    }
}

export default WorkshopItem;
