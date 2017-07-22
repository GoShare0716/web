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

// <div className="d-flex align-items-center">
//     <span className="hidden-md-down">
//         <img className="mr-1" width="32px" src="https://scontent.ftpe3-2.fna.fbcdn.net/v/t1.0-1/c0.25.64.64/p64x64/18622427_1859238271067164_3869120362467491071_n.jpg?oh=84e54bc64012d3fdcfb2236d78ca96b8&oe=59FF9727" alt="fb"/>
//         <img className="mr-1" width="32px" src="https://scontent.ftpe3-2.fna.fbcdn.net/v/t1.0-1/p64x64/18033585_1336400693122300_4338329632218462346_n.jpg?oh=44fcd106553b6fb14fee1301e3177bc7&oe=5A085465" alt="fb"/>
//         <img className="mr-1" width="32px" src="https://scontent.ftpe3-2.fna.fbcdn.net/v/t1.0-1/p64x64/18118862_1251599901620224_3927080533890936169_n.jpg?oh=8e6f9da9f9f718bd5155fa3f2d372066&oe=5A0749CD" alt="fb"/>
//         <img className="mr-1" width="32px" src="https://scontent.ftpe3-2.fna.fbcdn.net/v/t1.0-1/p64x64/16998846_1290498551040215_6726353178621101254_n.jpg?oh=4d40aa385af693ba711f71cdfba6dfbc&oe=5A080DB4" alt="fb"/>
//     </span>
//     <span>賴詰凱、張嘉軒和其他 36 人想學</span>
// </div>

// <div className="d-flex align-items-center mb-3">
//     <ButtonGroup className="mr-2">
//         <Button color="primary">我想入門 | 36</Button>
//         <Button>我想精進</Button>
//     </ButtonGroup>
//     <span></span>
// </div>

import './Skill.css';

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
                        <InputGroup>
                            <InputGroupAddon>
                                <Input addon type="checkbox" aria-label="Checkbox for following text input"/>
                            </InputGroupAddon>
                            <div className="vote-content w-100">
                                <div className="vote-progress"></div>
                                <div className="vote-title">我想入門</div>
                            </div>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon>
                                <Input addon type="checkbox" aria-label="Checkbox for following text input"/>
                            </InputGroupAddon>
                            <div className="vote-content w-100">
                                <div className="vote-progress"></div>
                                <div className="vote-title">我想入門</div>
                            </div>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon>
                                <Input addon type="checkbox" aria-label="Checkbox for following text input"/>
                            </InputGroupAddon>
                            <div className="vote-content w-100">
                                <div className="vote-progress"></div>
                                <div className="vote-title">我想入門</div>
                            </div>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon>
                                <Input addon type="checkbox" aria-label="Checkbox for following text input"/>
                            </InputGroupAddon>
                            <div className="vote-content w-100">
                                <div className="vote-progress"></div>
                                <div className="vote-title">我想入門</div>
                            </div>
                        </InputGroup>
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
