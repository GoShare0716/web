import React, {Component} from 'react';
import {Button, Row, Col} from 'reactstrap';

class MultipleFilter extends Component {
    static defaultProps = {
        title: '分類',
        options: [
            '全部', '科技', '美學'
        ],
        defaultIndex: 0
    }

    render() {
        return (
            <div className="list-group-item">
                <Row className="m-0">
                    <Col xs="auto">{this.props.title}</Col>
                    <Col>
                        {this.renderOptions()}
                    </Col>
                </Row>
            </div>
        );
    }

    renderOptions() {
        let {options, defaultIndex} = this.props;
        return options.map((option, index) => {
            let color = index === defaultIndex
                ? 'primary'
                : 'link';
            return <Button key={index} className="mr-1" size="sm" color={color}>{option}</Button>;
        });
    }

}

export default MultipleFilter;
