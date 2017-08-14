import React, {Component} from 'react';
import {
    Col,
    Card,
    CardImg,
    CardText,
    CardBlock,
    CardFooter,
    CardTitle,
    CardSubtitle,
    Badge,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    ButtonGroup
} from 'reactstrap';

import './VoteListItem.css';

class VoteListItem extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    renderVoterAvatar(voters) {
        console.log(voters);
        return voters.slice(0, Math.min(3, voters.length)).map((voter, index) => <img key={index} src={voter.thumbnailUrl} alt=""/>);
    }

    render() {
        const {
            rank,
            id,
            name,
            imageUrl,
            vote: {
                basic,
                advanced,
                level
            }
        } = this.props;

        return (
            <Col className="mb-3" xs={12} sm={6} lg={4}>
                <Card className="vote-list-item">
                    <div className="workshop-list-item-image-container">
                        <CardImg top className="workshop-list-item-image" src={imageUrl} alt="card-image"/>
                    </div>
                    <Badge className="workshop-list-item-badge" color="primary">#{rank}</Badge>
                    <CardBlock>
                        <h4 className="workshop-list-item-title">{name}</h4>
                        <div className="text-muted mb-2">
                            <span>相關</span>
                            <span className="mx-1">·</span>
                            <a href="#">0 基礎網頁設計工作坊</a>
                        </div>
                        <div className="vote-list-item-voter">
                            {this.renderVoterAvatar([
                                ...basic.friends,
                                ...advanced.friends
                            ])}
                            <span className="vote-list-item-number text-muted">{basic.number + advanced.number}
                                位同學</span>
                        </div>
                    </CardBlock>


                </Card>
                <div className="vote-list-item-action-container">
                    <Dropdown className="vote-list-item-action" isOpen={this.state.isOpen} toggle={this.toggle}>
                        <DropdownToggle><i className="fa fa-star" aria-hidden="true"/>我擅長</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem><i className="fa fa-paper-plane" aria-hidden="true"/>入門</DropdownItem>
                            <DropdownItem><i className="fa fa-rocket" aria-hidden="true"/>精通</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className="vote-list-item-action" isOpen={this.state.isOpen} toggle={this.toggle}>
                        <DropdownToggle><i className="fa fa-heart" aria-hidden="true"/>我想學</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem><i className="fa fa-paper-plane" aria-hidden="true"/>入門</DropdownItem>
                            <DropdownItem><i className="fa fa-rocket" aria-hidden="true"/>精通</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Col>
        );
    }

}

// <CardFooter className="d-flex justify-content-between align-items-center">
//     <Dropdown className="vote-list-item-vote" isOpen={this.state.isOpen} toggle={this.toggle}>
//         <DropdownToggle><i className="fa fa-star" aria-hidden="true"/>我會</DropdownToggle>
//         <DropdownMenu>
//             <DropdownItem><i className="fa fa-paper-plane" aria-hidden="true"/>入門</DropdownItem>
//             <DropdownItem><i className="fa fa-rocket" aria-hidden="true"/>精通</DropdownItem>
//         </DropdownMenu>
//     </Dropdown>
//     <Dropdown className="vote-list-item-vote" isOpen={this.state.isOpen} toggle={this.toggle}>
//         <DropdownToggle><i className="fa fa-heart" aria-hidden="true"/>想學</DropdownToggle>
//         <DropdownMenu>
//             <DropdownItem><i className="fa fa-paper-plane" aria-hidden="true"/>入門</DropdownItem>
//             <DropdownItem><i className="fa fa-rocket" aria-hidden="true"/>精通</DropdownItem>
//         </DropdownMenu>
//     </Dropdown>
// </CardFooter>

export default VoteListItem;
