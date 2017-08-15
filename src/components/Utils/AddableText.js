import {Button, FormFeedback, FormGroup, Input, Label} from 'reactstrap';
import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {touch} from 'redux-form';




class AddableText extends Component {
    static defaultProps = {
        label: '您的課程有任何先決條件嗎？',
        placeholder: '例如：您應該有使用電腦的初級能力'
    };

    constructor(props) {
        super(props);
        const {value} = this.props.input;
        this.state = {
            count: value === '' || value.count === 0
                ? 1
                : value.count,
            values: value === '' || value.count === 0
                ? ['']
                : value
        };
        this.addInput = this.addInput.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    addInput(e) {
        let {count, values} = this.state;
        this.setState({
            count: count + 1,
            values: [
                ...values,
                ''
            ]
        });
    }

    renderInputs(form, name) {
        return this.state.values.map((v, i) => (<Input className="mb-2" type="text" placeholder={this.props.placeholder} key={i} value={v} onChange={e => this.onChange(e.target.value, i)} onBlur={e => this.props.touch(form, name)}/>));
    }

    onChange(value, index) {
        let values = [...this.state.values];
        values[index] = value;
        this.props.input.onChange(values);
    }

    componentWillReceiveProps(nextProps) {
        const {input: {
                value
            }} = nextProps;
        if (value !== this.state.values) {
            this.setState({
                values: value === '' || value.count === 0
                    ? ['']
                    : value
            });
        }
    }

    render() {
        const {
            label,
            input: {
                name
            },
            meta: {
                form,
                touched,
                error
            }
        } = this.props;
        return (
            <FormGroup className="addable-form-group" color={touched && error
                ? 'danger'
                : ''}>
                <Label>{label}</Label>
                {this.renderInputs(form, name)}
                <Button onClick={this.addInput}>新增一個答案</Button>
                <FormFeedback>{touched && error
                        ? <span>{error}</span>
                        : ''}</FormFeedback>
            </FormGroup>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        touch
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddableText);
