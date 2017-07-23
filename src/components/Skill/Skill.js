import React, {Component} from 'react';
import {
    ButtonGroup,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Row,
    Col,
    Progress,
    InputGroup, InputGroupAddon, Input,
} from 'reactstrap';

import Vote from '../Utils/Vote';

class Skill extends Component {
    render() {
        let {isOpen, toggle} = this.props;
        return (
            <Modal isOpen={isOpen} toggle={toggle} size="lg">
                <ModalBody>
                    <div className="d-flex justify-content-end">
                        <button type="button" className="close" onClick={toggle}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="mb-3 d-flex flex-column align-items-center">
                        <h1 className="mb-3">C/C++</h1>
                        <span>C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。</span>
                        <hr className="w-100 my-3"/>
                        <Vote />
                        <Vote className="mt-2" />
                    </div>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/qAeybdD5UoQ"></iframe>
                    </div>
                </ModalBody>
            </Modal>
        );
    }

}

export default Skill;
