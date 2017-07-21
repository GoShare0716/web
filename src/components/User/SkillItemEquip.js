import React, {Component} from 'react';
import {
    Col,
    Card,
    CardText,
    CardBlock,
    CardTitle,
    Button,
    ButtonGroup,
    CardFooter
} from 'reactstrap';

export default class SkillEquipItem extends Component {
    render() {
        return (
            <Col className="mb-3" xs={12} md={6} lg={4}>
                <Card>
                    <CardBlock>
                        <CardTitle>C/C++</CardTitle>
                        <CardText className="card-intro">C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。</CardText>
                    </CardBlock>
                    <CardFooter className="d-flex justify-content-between">
                        <ButtonGroup size="sm">
                            <Button color="primary">入門</Button>
                            <Button>精進</Button>
                        </ButtonGroup>
                        <Button size="sm" color="danger">刪除</Button>
                    </CardFooter>
                </Card>
            </Col>
        );
    }
}
