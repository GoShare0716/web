import React, { Component } from 'react';

class UserAvatar extends Component {

    render() {
        let {size, thumbnailUrl, className, id} = this.props;
        return (
            <img className={className} src={thumbnailUrl} width={size} height={size} onClick={e => console.log(id)} alt="fb"/>
        );
    }

}

export default UserAvatar;
