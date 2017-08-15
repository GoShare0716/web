import {FormFeedback, FormGroup, Input, Label} from 'reactstrap';
import React, {Component} from 'react';


class RenderField extends Component {

    render() {
        const {
            label,
            input,
            type,
            name,
            placeholder,
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
                <Input {...input} type={type} name={name} placeholder={placeholder}/>
                <FormFeedback>{touched && error
                        ? <span>{error}</span>
                        : ''}</FormFeedback>
            </FormGroup>
        );
    }

}

export default RenderField;
