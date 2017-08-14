import React, {Component} from 'react';
import {history} from '../../utils';

class UserAvatar extends Component {
    static defaultProps = {
        id: 3,
        size: '32',
        thumbnailUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c0.19.50.50/p50x50/18622427_1859238271067164_3869120362467491071_n.jpg?oh=3c51ad379f496d4de20e0c18759614d8&oe=5A31E1D7'
    };

    constructor(props) {
        super(props);
        this.onClickUserAvatar = this.onClickUserAvatar.bind(this);
    }

    onClickUserAvatar(e) {
        e.stopPropagation();
        history.push(`/user/${this.props.id}`);
    }

    render() {
        let {size, thumbnailUrl, className} = this.props;
        return <img className={className} src={thumbnailUrl} width={size} height={size} onClick={this.onClickUserAvatar} alt="user-avatar"/>;
    }

}

export default UserAvatar;
