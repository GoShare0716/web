import React, {Component} from 'react';
import {Button, ButtonGroup} from 'reactstrap';

class MultipleButton extends Component {
    static defaultProps = {
        options: [
            [
                '入門', 'basic'
            ],
            ['精進', 'advanced']
        ],
        checkedOption: '',
        onButtonClick: (option) => {},
        cancellable: false,
        size: 'sm',
        style: {},
    }

    constructor(props) {
        super(props);
        this.state = {
            checkedOption: this.props.checkedOption
        };

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    componentWillReceiveProps({checkedOption}) {
        if (checkedOption !== this.state.checkedOption) {
            this.setState({checkedOption});
        }
    }

    onButtonClick(e, option) {
        e.stopPropagation();
        let {checkedOption} = this.state;
        if (this.props.cancellable) {
            this.props.onButtonClick(option);
            this.setState({
                checkedOption: checkedOption === option
                    ? -1
                    : option
            });
        } else {
            if (checkedOption !== option) {
                this.props.onButtonClick(option);
                this.setState({checkedOption: option});
            }
        }
    }

    renderButton() {
        return this.props.options.map(option => {
            let color = this.state.checkedOption === option[1]
                ? 'primary'
                : 'secondary';
            return <Button key={option} onClick={e => this.onButtonClick(e, option[1])} color={color}>{option[0]}</Button>;
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
