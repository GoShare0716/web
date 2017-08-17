import {FormFeedback, FormGroup, Input, Label} from 'reactstrap';
import React, {Component} from 'react';


class RenderField extends Component {
    static defaultProps = {
        disabled: false
    };

    render() {
        const {
            label,
            input,
            type,
            name,
            placeholder,
            disabled,
            meta: {
                touched,
                error
            }
        } = this.props;
        const min = type === 'number'
            ? 0
            : null;
        return (
            <FormGroup color={touched && error
                ? 'danger'
                : ''}>
                <Label>{label}</Label>
                <Input {...input} type={type} name={name} placeholder={placeholder} disabled={disabled} min={min}/>
                <FormFeedback>{touched && error
                        ? <span>{error}</span>
                        : ''}</FormFeedback>
            </FormGroup>
        );
    }

}

export default RenderField;
