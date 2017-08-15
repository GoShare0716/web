import './ImageUpload.css';

import {
    FormFeedback,
    FormGroup,
    Input,
    InputGroup,
    InputGroupButton,
    Label
} from 'reactstrap';
import React, {Component} from 'react';

import Dropzone from 'react-dropzone';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {touch} from 'redux-form';





class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploading: false,
            message: '拖曳或點擊上傳圖片'
        };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(accepted, rejected) {
        const {onChange} = this.props.input;
        if (accepted[0] && !this.state.uploading) {
            onChange('');
            this.setState({uploading: true, message: '上傳中...'});
            let formData = new FormData();
            formData.append('image', accepted[0]);
            axios.post('https://api.imgur.com/3/image', formData, {
                headers: {
                    'authorization': 'Client-ID 33a84cb8ab47e04'
                }
            }).then(res => {
                onChange(res.data.data.link);
            }).catch(err => {
                console.log(err);
            }).then(() => {
                this.setState({uploading: false, message: '拖曳或點擊上傳圖片'});
            });
        }
    }

    render() {
        const {
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
        const {uploading, message} = this.state;
        return (
            <FormGroup color={touched && error
                ? 'danger'
                : ''}>
                <Label>封面圖片連結</Label>
                <InputGroup>
                    <Input type="url" value={value} onChange={onChange} disabled={uploading} onBlur={e => this.props.touch(form, name)}/>
                    <InputGroupButton color="primary" disabled={uploading} onClick={() => this.dropzoneRef.open()}>上傳圖片</InputGroupButton>
                </InputGroup>
                <FormFeedback>{touched && error
                        ? <span>{error}</span>
                        : ''}</FormFeedback>
                <Dropzone className="dropzone mt-2" activeClassName="dropzone-active" rejectClassName="dropzone-reject" multiple={false} accept="image/jpeg, image/png" maxSize={10485760} onDrop={this.onDrop} disableClick={uploading} ref={(node) => {
                    this.dropzoneRef = node;
                }}>
                    {value !== '' && <img className="dropzone-image" src={value} alt=""/>}
                    {value === '' && <p className="dropzone-message">{message}</p>}
                </Dropzone>

            </FormGroup>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        touch
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(ImageUpload);
