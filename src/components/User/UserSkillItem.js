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
import MultipleButton from '../Utils/MultipleButton';

const learnOptions = [
        ['我想入門', 'basic'],
        ['我想精進', 'advanced']
    ],
    equipOptions = [
        ['我已經入門', 'basic'],
        ['我已經精進', 'advanced']
    ];

export default class UserSkillItem extends Component {
    static defaultProps = {
        type: 'equip'
    }

    render() {
        let {type} = this.props;
        let options = type === 'learn' ? learnOptions : equipOptions;
        return (
            <Col className="mb-3" xs={12} md={6} lg={4}>
                <Card>
                    <CardBlock>
                        <CardTitle>C/C++</CardTitle>
                        <CardText className="card-intro">C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。</CardText>
                    </CardBlock>
                    <CardFooter className="d-flex justify-content-between">
                        <MultipleButton options={options} />
                        <Button size="sm" color="danger">刪除</Button>
                    </CardFooter>
                </Card>
            </Col>
        );
    }
}
