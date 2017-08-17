import {FormFeedback, FormGroup, Label} from 'reactstrap';
import React, {Component} from 'react';

import {Field} from 'redux-form';



class RenderRadio extends Component {
    static defaultProps = {
        disabled: false
    };

    renderOptions(input, options, disabled) {
        return options.map((o, i) => (
            <FormGroup key={i} check>
                <Label check>
                    <Field component="input" className="form-check-input" {...input} type="radio" value={o.value} disabled={disabled}/>
                    <span>{o.text}</span>
                </Label>
            </FormGroup>
        ));
    }

    render() {
        const {
            label,
            input,
            options,
            disabled,
            meta: {
                touched,
                error
            }
        } = this.props;
        return (
            <FormGroup color={touched && error
                ? 'danger'
                : ''}>
                <Label>{label}</Label>
                {this.renderOptions(input, options, disabled)}
                <FormFeedback>{touched && error
                        ? <span>{error}</span>
                        : ''}</FormFeedback>
            </FormGroup>
        );
    }
}

export default RenderRadio;
