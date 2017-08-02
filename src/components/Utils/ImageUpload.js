import React, {Component} from 'react';
import {
    FormGroup,
    Label,
    Input,
    InputGroup,
    InputGroupButton
} from 'reactstrap';
import Dropzone from 'react-dropzone';
import axios from 'axios';

import './ImageUpload.css';

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
        const {input: {
                onChange
            }} = this.props;
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
                value,
                onChange
            }
        } = this.props;
        const {uploading, message} = this.state;
        return (
            <FormGroup>
                <Label>封面圖片連結</Label>
                <InputGroup>
                    <Input type="url" value={value} onChange={onChange} disabled={uploading}/>
                    <InputGroupButton color="primary" disabled={uploading} onClick={() => {
                        this.dropzoneRef.open()
                    }}>上傳圖片</InputGroupButton>
                </InputGroup>
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

export default ImageUpload;
