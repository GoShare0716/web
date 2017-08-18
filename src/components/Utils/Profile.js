import './Profile.css';

import React, {Component} from 'react';

import {history} from '../../utils';
import renderHTML from 'react-render-html';



class Profile extends Component {
    static defaultProps = {
        profile: {
            id: 1,
            pictureUrl: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/14907205_1735976403393352_4070401399338628514_n.jpg?oh=70a840220c248b11e3674c348421d695&oe=5A299617',
            name: '賴詰凱',
            fbUrl: 'https://www.facebook.com/skyle0115',
            personalWebUrl: 'https://www.facebook.com/',
            introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis quod culpa minus temporibus! Eveniet magni esse deserunt ratione minus amet animi, qui cupiditate sunt perferendis, inventore labore modi unde.'
        }
    }

    render() {
        const {
            id,
            pictureUrl,
            name,
            fbUrl,
            personalWebUrl,
            introduction
        } = this.props.profile;
        return (
            <div className={`profile ${this.props.className}`}>
                <img className="profile-img" src={pictureUrl} alt="profile-img" onClick={e => history.push(`/user/${id}`)}/>
                <h4 className="profile-name mb-2" onClick={e => history.push(`/user/${id}`)}>{name}</h4>
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
                <p className="mb-2">{renderHTML(introduction)}</p>
                {this.props.children}
            </div>
        );
    }

}

export default Profile;
