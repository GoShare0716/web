import 'moment/locale/zh-tw';
import './WorkshopItem.css';

import {Badge, Card, CardBlock, CardImg, Col} from 'reactstrap';
import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import ProgressBar from '../Utils/ProgressBar';
import moment from 'moment';





export default class WorkshopItem extends Component {
    render() {
        const {
            id,
            imageUrl,
            title,
            author: {
                name
            },
            deadline,
            closing,
            startDatetime,
            phase
        } = this.props;
        let {
            minNumber,
            maxNumber,
            prePrice,
            price,
            attendees: {
                friends,
                number
            }
        } = this.props;
        minNumber = parseInt(minNumber, 10);
        maxNumber = parseInt(maxNumber, 10);
        prePrice = parseInt(prePrice, 10);
        price = parseInt(price, 10);
        number = parseInt(number, 10);

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
                badge = '待審核';
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
                badge = `調查倒數 ${moment(deadline).fromNow(true)}`;
                badgeColor = 'primary';
                progressBarText = `還要 ${minNumber - number} 人達標`;
                progressBarColor = '#0275d8';
                progressBarValue = number * 100 / minNumber;
                priceDeletedText = price === 0
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
                    ? `活動倒數 ${moment(startDatetime).fromNow(true)}`
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
                badge = `活動倒數 ${moment(startDatetime).fromNow(true)}`;
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
                    <Card className="workshop-list-item">
                        <div className="workshop-list-item-image-container">
                            <CardImg top className="workshop-list-item-image" src={imageUrl} alt=""/>
                        </div>
                        <Badge className="workshop-list-item-badge" color={badgeColor}>{badge}</Badge>
                        <CardBlock>
                            <h4 className="workshop-list-item-title mb-2">{title}</h4>
                            <div className="text-muted mb-2">
                                <span>{name}</span>
                                <span className="mx-1">·</span>
                                <span>{moment(startDatetime).format('M 月 D 日')}</span>
                                {friends.length > 0 && <span className="mx-1">·</span>}
                                {friends.length > 0 && <span>{`${friends.length} 位朋友`}</span>}
                            </div>
                            <ProgressBar className="mb-2" color={progressBarColor} value={progressBarValue} text={progressBarText}/>
                            <div className="d-flex align-items-center justify-content-end">
                                <span className="workshop-list-item-price-deleted mr-2">{priceDeletedText}</span>
                                <span className="workshop-list-item-price" style={{
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
