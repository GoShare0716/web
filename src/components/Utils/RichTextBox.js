import React, {Component} from 'react';
import ReactQuill from 'react-quill';

import './RichTextBox.css';

class RichTextBox extends Component {
    render() {
        const {
            input: {
                value,
                onChange
            }
        } = this.props;
        return (<ReactQuill className="rich-text-box" value={value} onChange={onChange}/>);
    }

}

export default RichTextBox;
