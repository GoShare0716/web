import {Button, ButtonGroup} from 'reactstrap';
import React, {Component} from 'react';


class MultipleButton extends Component {
    static defaultProps = {
        cancellable: false,
        size: '',
        style: {},
    }

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };

        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps({value}) {
        if (value !== this.state.value) {
            this.setState({value});
        }
    }

    onChange(e, nextValue) {
        e.stopPropagation();
        let {value} = this.state;
        const {cancellable, onChange} = this.props;
        if (cancellable) {
            onChange(nextValue);
            this.setState({
                value: value === nextValue
                    ? null
                    : nextValue
            });
        } else if (value !== nextValue) {
            onChange(nextValue);
            this.setState({value: nextValue});
        }
    }

    renderButton() {
        return this.props.options.map((option, index) => {
            let color = this.state.value === option.value
                ? 'primary'
                : 'secondary';
            return <Button key={index} onClick={e => this.onChange(e, option.value)} color={color}>{option.text}</Button>;
        });
    }

    render() {
        let {size, style} = this.props;
        return (
            <ButtonGroup size={size} style={style}>
                {this.renderButton()}
            </ButtonGroup>
        );
    }
}

export default MultipleButton;
