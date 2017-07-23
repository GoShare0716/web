import React, {Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Label
} from 'reactstrap';

import './UserProfile.css';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };

        this.modalToggle = this.modalToggle.bind(this);
    }

    modalToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="user-profile">
                <img className="user-profile-img" src="https://scontent-tpe1-1.xx.fbcdn.net/v/t31.0-8/14876496_1735976403393352_4070401399338628514_o.jpg?oh=0ff4f0965c69809a048ea68c7dfb5836&oe=59C71556" alt=""/>
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
                <Button onClick={this.modalToggle}>編輯</Button>
                <Modal isOpen={this.state.isOpen} toggle={this.modalToggle}>
                    <ModalBody>
                        <div className="d-flex justify-content-end">
                            <button type="button" className="close" onClick={this.modalToggle}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="mb-3">
                            <h4 className="mb-3">編輯個人檔案</h4>
                            <Label>Email</Label>
                            <Input className="mb-3" type="text"/>
                            <Label>臉書網址</Label>
                            <Input className="mb-3" type="text"/>
                            <Label>個人頁面網址</Label>
                            <Input className="mb-3" type="text"/>
                            <Label>自我介紹</Label>
                            <Input className="mb-3" type="textarea" rows="4"/>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.modalToggle}>送出</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

}

export default UserProfile;
