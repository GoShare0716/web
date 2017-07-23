import React, {Component} from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBlock,
    CardTitle,
    Badge,
    Col
} from 'reactstrap';

import './UserWorkshopItem.css';

export default class UserWorkshopItem extends Component {
    render() {
        return (
            <Col className="mb-3" xs={12} sm={6} lg={4}>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?w=160&h=90" alt="Card image cap"/>
                    <Badge className="workshop-list-item-tag" color="primary">已達標</Badge>
                    <CardBlock>
                        <CardTitle>HTML/CSS 網頁前端入門</CardTitle>
                        <CardText className="card-intro">Some quick example text to build on the card title and make up the bulk of the card's content. lorem</CardText>
                    </CardBlock>
                </Card>
            </Col>
        );
    }
}
