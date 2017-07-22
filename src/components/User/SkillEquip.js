import React, {Component} from 'react';
import {
    Col,
    Card,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import Autosuggest from 'react-autosuggest';

import './SkillEquip.css';

class SkillEpuip extends Component {
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
            <Col className="mb-3" xs={12} md={6} lg={4}>
                <Card onClick={this.modalToggle} className="user-skill-equip">
                    <div>
                        <i className="fa fa-4x fa-plus" aria-hidden="true" style={{
                            color: 'white'
                        }}></i>
                    </div>

                </Card>
                <Modal isOpen={this.state.isOpen} toggle={this.modalToggle}>
                    <ModalHeader>Modal title</ModalHeader>
                    <ModalBody>                    
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.modalToggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.modalToggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Col>
        );
    }

}

export default SkillEpuip;
