import 'moment/locale/zh-tw';
import './WorkshopListItem.css';

import {Badge, Card, CardBlock, CardImg, Col} from 'reactstrap';
import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import ProgressBar from '../Utils/ProgressBar';
import moment from 'moment';





export default class WorkshopListItem extends Component {
    render() {
        let {
            id,
            imageUrl,
            title,
            author: {
                name
            },
            minNumber,
            maxNumber,
            deadline,
            closing,
            startDatetime,
            prePrice,
            price,
            attendees: {
                friends,
                number
            },
            phase
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
            case 'investigating':
                badge = `調查倒數 ${moment(deadline).fromNow(true)}`;
                badgeColor = 'primary';
                progressBarText = `還要 ${minNumber - number} 人達標`
                progressBarColor = '#0275d8';
                progressBarValue = number * 100 / minNumber;
                priceDeletedText = `NT$${price}`;
                priceText = `NT$${prePrice}`;
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
                priceText = `NT$${price}`;
                priceColor = '#5cb85c';
                break;
            case 'closing':
                badge = `活動倒數 ${moment(startDatetime).fromNow(true)}`;
                badgeColor = 'success';
                progressBarText = '報名截止';
                progressBarColor = '#5cb85c';
                progressBarValue = number * 100 / maxNumber;
                priceDeletedText = '';
                priceText = `NT$${price}`;
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
                priceText = `NT$${price}`;
                priceColor = '#AAA';
                break;
            default:

        }
        return (
            <Col className="mb-3" xs={12} sm={6} lg={4}>
                <Link to={`/workshop/${id}`} className="unlink">
                    <Card className="workshop-list-item">
                        <div className="workshop-list-item-image-container">
                            <CardImg top className="workshop-list-item-image" src={imageUrl} alt="card-image"/>
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
