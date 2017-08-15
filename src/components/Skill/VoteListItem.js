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
                    <div className="vote-list-item-image-container">
                        <CardImg top className="vote-list-item-image" src={imageUrl} alt="card-image"/>
                    </div>
                    <div className="vote-list-item-badge" color="primary">{`#${rank}`}</div>
                    <CardBlock>
                        <h4 className="vote-list-item-title">{name}</h4>
                        <div className="text-muted">
                            <span>相關</span>
                            <span className="mx-1">·</span>
                            <a href="#">0 基礎網頁設計工作坊</a>
                        </div>

                    </CardBlock>
                    <CardFooter className="vote-list-item-action">
                        <div className="vote-list-item-voter">
                            {this.renderVoterAvatar([
                                ...basic.friends,
                                ...advanced.friends
                            ])}
                            <span className="vote-list-item-number text-muted">{`${basic.number + advanced.number} 位同學`}</span>
                        </div>
                        <Dropdown isOpen={this.state.isOpen} toggle={this.toggle}>
                            <DropdownToggle size="sm"><i className="fa fa-heart" aria-hidden="true"/>我想學</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem><i className="fa fa-paper-plane" aria-hidden="true"/>入門</DropdownItem>
                                <DropdownItem><i className="fa fa-rocket" aria-hidden="true"/>精通</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </CardFooter>

                </Card>

            </Col>
        );
    }
}

export default VoteListItem;
