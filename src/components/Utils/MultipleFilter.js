import React, {Component} from 'react';
import {Button, Row, Col} from 'reactstrap';

class MultipleFilter extends Component {
    static defaultProps = {
        title: '分類',
        options: [
            ['全部', 'all'],
            ['科技', 'technology'],
            ['美學', 'aesthetics']
        ],
        defaultOption: 'all',
        optionOnClick: () => {}
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null
        };

        this.optionOnClick = this.optionOnClick.bind(this);
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
        let {options, defaultOption} = this.props;
        return options.map(option => {
            let color = (this.state.selectedOption || defaultOption) === option[1]
                ? 'primary'
                : 'link';
            return <Button key={option[1]} onClick={e => this.optionOnClick(option[1])} className="mr-1" size="sm" color={color}>{option[0]}</Button>;
        });
    }

    optionOnClick(selectedOption) {
        if (this.state.selectedOption !== selectedOption) {
            this.props.optionOnClick(selectedOption);
            this.setState({selectedOption});
        }
    }

}

export default MultipleFilter;
