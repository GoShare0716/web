import React, {Component} from 'react';
import {history} from '../../utils';

class UserAvatar extends Component {
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
