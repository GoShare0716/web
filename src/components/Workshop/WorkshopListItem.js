import React, {Component} from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBlock,
    CardTitle,
    CardFooter,
    Progress,
    Badge,
    Col
} from 'reactstrap';

import './WorkshopListItem.css';

export default class WorkshopListItem extends Component {
    render() {
        return (
            <Col className="mb-3" xs={12} sm={6} lg={4}>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?w=160&h=90" alt="Card image cap"/>
                    <Badge className="workshop-list-item-tag" color="primary">已達標</Badge>
                    <CardBlock>
                        <CardTitle>HTML/CSS 網頁前端入門</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Progress value="25"/>
                    </CardBlock>
                    <CardFooter className="d-flex justify-content-between text-muted">
                        <span>0 元</span>
                        <span>還差 25 人達標</span>
                    </CardFooter>
                </Card>
            </Col>
        );
    }
}
