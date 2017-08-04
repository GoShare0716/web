import React, {Component} from 'react';
import moment from 'moment';
import 'moment/locale/zh-tw';
import {history} from '../../utils';
import {Card, CardImg, CardBlock, Badge, Col} from 'reactstrap';
import ProgressBar from '../Utils/ProgressBar';

import './WorkshopListItem.css';
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
            attendeesNumber,
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
                progressBarText = `還要 ${minNumber - attendeesNumber} 人達標`
                progressBarColor = '#0275d8';
                progressBarValue = attendeesNumber * 100 / minNumber;
                priceDeletedText = `達標後 NT$${price}`;
                priceText = `NT$${prePrice}`;
                priceColor = '#0275d8';
                break;
            case 'reached':
                badge = `報名倒數 ${moment(closing).fromNow(true)}`
                badgeColor = 'success';
                let rest = maxNumber - attendeesNumber;
                progressBarText = rest === 0
                    ? '已額滿'
                    : `最後 ${rest} 個座位`;
                progressBarColor = '#5cb85c';
                progressBarValue = attendeesNumber * 100 / maxNumber;
                priceDeletedText = '';
                priceText = `NT$${price}`;
                priceColor = '#5cb85c';
                break;
            case 'over':
                badge = '已結束';
                badgeColor = 'default';
                progressBarColor = 'primary';
                priceDeletedText = '';
                priceText = `NT$${price}`;
                priceColor = '#AAA';
                break;
            default:

        }

        return (
            <Col className="mb-3" xs={12} sm={6} lg={4}>
                <Card className="workshop-list-item" onClick={e => history.push(`/workshop/${id}`)}>
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
            </Col>
        );
    }
}
