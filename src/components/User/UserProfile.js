import React, {Component} from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    Input,
    Label
} from 'reactstrap';
import Profile from '../Utils/Profile';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
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
            <Profile>
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
            </Profile>
        );
    }

}

export default UserProfile;
