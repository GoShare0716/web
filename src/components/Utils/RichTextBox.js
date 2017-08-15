import './RichTextBox.css';

import {FormFeedback, FormGroup, Label} from 'reactstrap';
import React, {Component} from 'react';

import ReactQuill from 'react-quill';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {touch} from 'redux-form';





class RichTextBox extends Component {
    render() {
        const {
            label,
            input: {
                name,
                value,
                onChange
            },
            meta: {
                form,
                touched,
                error
            }
        } = this.props;
        return (
            <FormGroup color={touched && error
                ? 'danger'
                : ''}>
                <Label>{label}</Label>
                <FormFeedback>{touched && error
                        ? <span>{error}</span>
                        : ''}</FormFeedback>
                <ReactQuill className="rich-text-box" value={value} onChange={onChange} onBlur={() => this.props.touch(form, name)}/>
            </FormGroup>

        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        touch
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(RichTextBox);
