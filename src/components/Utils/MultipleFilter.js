import React, {Component} from 'react';
import {Button, Row, Col} from 'reactstrap';

class MultipleFilter extends Component {
    static defaultProps = {
        label: '分類',
        options: [
            {
                text: '全部',
                value: 'all'
            }, {
                text: '科技',
                value: 'technology'
            }, {
                text: '美學',
                value: 'aesthetics'
            }
        ],
        defaultOption: 'all',
        onChange: () => {}
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null
        };

        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <div className="list-group-item">
                <Row className="m-0">
                    <Col xs="auto">{this.props.label}</Col>
                    <Col>
                        {this.renderOptions()}
                    </Col>
                </Row>
            </div>
        );
    }

    renderOptions() {
        const {options, defaultOption} = this.props;
        return options.map(option => {
            const color = (this.state.selectedOption || defaultOption) === option.value
                ? 'primary'
                : 'link';
            return <Button key={option.value} onClick={e => this.onChange(option.value)} className="mr-1" size="sm" color={color}>{option.text}</Button>;
        });
    }

    onChange(selectedOption) {
        if (this.state.selectedOption !== selectedOption) {
            this.props.onChange(selectedOption);
            this.setState({selectedOption});
        }
    }

}

export default MultipleFilter;
