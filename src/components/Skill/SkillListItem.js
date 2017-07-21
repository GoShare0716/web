import React, {Component} from 'react';
import {
    Col,
    Card,
    CardText,
    CardBlock,
    CardTitle,
    Button,
    ButtonGroup
} from 'reactstrap';

import Skill from './Skill';
import './SkillListItem.css';

export default class SkillListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Col className="mb-3" xs={12} lg={6}>
                <Card onClick={this.toggle} className="skill-list-item">
                    <CardBlock>
                        <CardTitle>C/C++</CardTitle>
                        <CardText>C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。</CardText>
                        <span className="text-muted">賴詰凱、張嘉軒和其他 36 人想學</span>
                        <hr className="mt-1"/>
                        <ButtonGroup size="sm">
                            <Button>我想入門</Button>
                            <Button>我想精進</Button>
                        </ButtonGroup>
                    </CardBlock>
                </Card>
                <Skill isOpen={this.state.isOpen} toggle={this.toggle}/>
            </Col>
        );
    }
}
