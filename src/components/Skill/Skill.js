import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Youtube from 'react-youtube';

const opts = {
    height: '360',
    width: '100%'
};

class Skill extends Component {
    render() {
        let {isOpen, toggle} = this.props;
        return (
            <Modal isOpen={isOpen} toggle={toggle} size="lg">
                <ModalHeader>C/C++</ModalHeader>
                <ModalBody>
                    <span>C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。</span>
                    <hr/>
                    <Youtube opts={opts} videoId="qAeybdD5UoQ"/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }

}

export default Skill;
