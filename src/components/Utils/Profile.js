import './Profile.css';

import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import {history} from '../../utils';
import renderHTML from 'react-render-html';




class Profile extends Component {
    render() {
        const {
            className,
            profile: {
                id,
                pictureUrl,
                name,
                fbUrl,
                personalWebUrl,
                introduction
            },
            children
        } = this.props;

        return (
            <div className={`profile my-5 ${className}`}>
                <Link to={`/user/${id}`} className="unlink">
                    <img className="profile-img mb-3" src={pictureUrl} alt=""/>
                </Link>
                <Link to={`/user/${id}`} className="unlink">
                    <h4>{name}</h4>
                </Link>
                <div className="mb-2">
                    <a href={fbUrl} target="_blank">
                        <i className="fa fa-facebook-square mr-1" aria-hidden="true"/>
                        <span>臉書連結</span>
                    </a>
                    <span className="mx-2">·</span>
                    <a href={personalWebUrl} target="_blank">
                        <i className="fa fa-user-circle mr-1" aria-hidden="true"/>
                        <span>個人頁面</span>
                    </a>
                </div>
                <div className="mb-2">{renderHTML(introduction)}</div>
                {children}
            </div>
        );
    }
}

export default Profile;
