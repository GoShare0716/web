import {Button, FormFeedback, FormGroup, Input, Label} from 'reactstrap';
import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {touch} from 'redux-form';




class AddableText extends Component {
    static defaultProps = {
        disabled: false
    };

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        const {
            label,
            placeholder,
            disabled,
            input: {
                name,
                value,
                onChange
            },
            meta: {
                form,
                touched,
                error
            },
            touch
        } = this.props;
        if (!value) {
            onChange(['']);
        }
        return (
            <FormGroup className="addable-form-group" color={touched && error
                ? 'danger'
                : ''}>
                <Label>{label}</Label>
                {value && value.map((v, i) => <Input className="mb-2" type="text" placeholder={placeholder} key={i} value={v} onBlur={() => touch(form, name)} disabled={disabled} onChange={e => this.onInputChange(value, e.target.value, i, onChange)}/>)}
                <Button onClick={() => onChange([...value, ''])} disabled={disabled}>新增一個項目</Button>
                <FormFeedback>{touched && error
                        ? <span>{error}</span>
                        : ''}</FormFeedback>
            </FormGroup>
        );
    }

    onInputChange(value, v, i, onChange) {
        let nextValue = [...value];
        nextValue[i] = v;
        onChange(nextValue);
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        touch
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddableText);
