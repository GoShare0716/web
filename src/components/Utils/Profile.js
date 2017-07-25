import React, {Component} from 'react';
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <div className={`profile ${this.props.className}`}>
                <img className="profile-img" src="https://scontent-tpe1-1.xx.fbcdn.net/v/t31.0-8/14876496_1735976403393352_4070401399338628514_o.jpg?oh=0ff4f0965c69809a048ea68c7dfb5836&oe=59C71556" alt=""/>
                <h4 className="mb-2">賴詰凱</h4>
                <div className="mb-2">
                    <span>
                        <a href="" target="_blank">
                            <i className="fa fa-facebook-square mr-1" aria-hidden="true"></i>臉書連結</a>
                    </span>
                    <span className="mx-2">·</span>
                    <span>
                        <a href="" target="_blank">
                            <i className="fa fa-user-circle mr-1" aria-hidden="true"></i>個人頁面</a>
                    </span>
                </div>
                <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, in impedit ut dolores sint facere. Deserunt beatae voluptate natus architecto suscipit deleniti provident labore laboriosam! Sunt deserunt velit odit, sapiente.</p>
                {this.props.children}
            </div>
        );
    }

}

export default Profile;
