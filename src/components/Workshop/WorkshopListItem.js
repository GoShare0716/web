import React, {Component} from 'react';
import {history} from '../../utils';
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
    static defaultProps = {
        id: 2,
    }

    render() {
        let {id} = this.props;
        return (
            <Col className="mb-3" xs={12} sm={6} lg={4}>
                <Card className="workshop-list-item" onClick={e => history.push(`/workshop/${id}`)}>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?w=160&h=80" alt="Card image cap"/>
                    <Badge className="workshop-list-item-tag" color="primary">已達標</Badge>
                    <CardBlock>
                        <CardTitle>HTML/CSS 網頁前端入門</CardTitle>
                        <CardText className="card-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
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
