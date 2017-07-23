import React, {Component} from 'react';
import {
    Col,
    Card,
    Modal,
    ModalBody,
    Input
} from 'reactstrap';
import UserEquipItem from './UserEquipItem';

import './UserEquip.css';

class UserEpuip extends Component {
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
            <Col className="mb-3" xs={12} md={6} lg={4}>
                <Card onClick={this.modalToggle} className="user-skill-equip">
                    <div>
                        <i className="fa fa-4x fa-plus" aria-hidden="true" style={{
                            color: 'white'
                        }}></i>
                    </div>

                </Card>
                <Modal isOpen={this.state.isOpen} toggle={this.modalToggle} size="lg">
                    <ModalBody>
                        <div className="d-flex justify-content-end">
                            <button type="button" className="close" onClick={this.modalToggle}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="mb-3">
                            <h4 className="mb-3">新增我會的技能</h4>
                            <Input className="mb-3" type="text"/>
                            <div className="user-skill-equip-list">
                                <UserEquipItem />
                                <UserEquipItem />
                                <UserEquipItem />
                                <UserEquipItem />
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </Col>
        );
    }

}

export default UserEpuip;
