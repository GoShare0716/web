import {Button, ListGroupItem} from 'reactstrap';
import React, {Component} from 'react';


class MultipleFilter extends Component {
    constructor(props) {
        super(props);
        this.onOptionChange = this.onOptionChange.bind(this);
    }

    render() {
        const {label, options, value, onChange} = this.props;
        return (
            <ListGroupItem>
                <span className="mr-3">{label}</span>
                {this.renderOptions(options, value, onChange)}
            </ListGroupItem>
        );
    }

    renderOptions(options, value, onChange) {
        return options.map(option => {
            const color = value === option.value
                ? 'primary'
                : 'link';
            return <Button key={option.value} onClick={() => this.onOptionChange(value, option.value, onChange)} className="mr-1" size="sm" color={color}>{option.text}</Button>;
        });
    }

    onOptionChange(value, v, onChange) {
        if (value !== v) {
            onChange(v);
        }
    }
}

export default MultipleFilter;
