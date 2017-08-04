import React, {Component} from 'react';
import {history} from '../../utils';
import {
    Card,
    CardImg,
    CardText,
    CardBlock,
    CardTitle,
    Badge,
    Col,
    Progress
} from 'reactstrap';

export default class UserWorkshopItem extends Component {
    static defaultProps = {
        id: 5
    }

    render() {
        let {id} = this.props;
        return (
            <Col className="mb-3" xs={12} sm={6} lg={4}>
                <Card className="user-workshop-item" onClick={e => history.push(`/workshop/${id}`)}>
                    <div className="card-image-container">
                        <CardImg top className="card-image" src="https://placeholdit.imgix.net/~text?w=160&h=80" alt="card-image"/>
                    </div>
                    <Badge className="card-tag" color="primary">報名倒數 1 天</Badge>
                    <CardBlock>
                        <h4 className="workshop-list-item-title mb-2">HTML/CSS/JavaScript 零基礎入門</h4>
                        <div className="text-muted mb-2">資工系<span className="mx-1">·</span>賴詰凱<span className="mx-1">·</span>12 月 31 日</div>
                        <Progress className="mb-2" value="87">還有 5 個座位</Progress>
                    </CardBlock>
                </Card>
            </Col>
        );
    }
}
