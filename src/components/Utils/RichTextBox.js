import './RichTextBox.css';

import {FormFeedback, FormGroup, Label} from 'reactstrap';
import React, {Component} from 'react';

import Dropzone from 'react-dropzone';
import ReactQuill from 'react-quill';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {deliverAlert} from '../../actions/alert';
import {touch} from 'redux-form';






class RichTextBox extends Component {
    static defaultProps = {
        disabled: false,
        modules: {}
    };

    modules = {
        toolbar: {
            container: [
                [
                    {
                        'header': [4, false]
                    }
                ],
                [
                    'bold', 'italic', 'underline', 'strike'
                ],
                [
                    'blockquote', 'code-block'
                ],
                [
                    {
                        'color': []
                    }, {
                        'background': []
                    }
                ],
                [
                    {
                        'list': 'ordered'
                    }, {
                        'list': 'bullet'
                    }
                ],
                [
                    'link', 'image'
                ],
                ['clean']
            ],
            handlers: {
                'image': this.imageHandler.bind(this)
            }
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            uploading: false
        };

        this.modules = {
            ...this.modules,
            ...this.props.modules
        };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(accepted, rejected) {
        if (accepted[0] && !this.state.uploading) {
            const editor = this.quillRef.getEditor();
            const range = editor.getSelection();
            editor.insertText(range.index, '圖片上傳中，請稍後...');
            editor.enable(false);
            this.setState({uploading: true});

            let formData = new FormData();
            formData.append('image', accepted[0]);
            axios.post('https://api.imgur.com/3/image', formData, {
                headers: {
                    'authorization': 'Client-ID 33a84cb8ab47e04'
                }
            }).then(res => {
                editor.enable(true);
                editor.deleteText(range.index, 12);
                editor.insertEmbed(range.index, 'image', res.data.data.link, "user");
            }).catch(err => {
                this.props.deliverAlert('上傳失敗', 'danger');
            }).then(() => {
                this.setState({uploading: false});
                editor.enable(true);
            });
        }
    }

    imageHandler() {
        this.dropzoneRef.open();
    }

    render() {
        const {
            label,
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
                <ReactQuill className="rich-text-box" modules={this.modules} value={value} onChange={onChange} readOnly={disabled} onBlur={() => this.props.touch(form, name)} ref={node => this.quillRef = node}/>
                <Dropzone className="w-100" multiple={false} accept="image/jpeg, image/png" maxSize={10485760} onDrop={this.onDrop} disableClick={this.state.uploading} ref={node => this.dropzoneRef = node}/>
            </FormGroup>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        touch,
        deliverAlert
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(RichTextBox);
