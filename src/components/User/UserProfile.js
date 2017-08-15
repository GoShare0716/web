import {
    Button,
    Form,
    FormGroup,
    Label,
    Modal,
    ModalBody
} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import React, {Component} from 'react';

import Profile from '../Utils/Profile';
import RichTextBox from '../Utils/RichTextBox';




class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };

        this.modalToggle = this.modalToggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const {initialize, profile} = nextProps;
        initialize(profile);
    }

    modalToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleSubmit(form) {
        console.log(form)
    }

    render() {
        const {handleSubmit} = this.props;
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
                        <Form onSubmit={handleSubmit(this.handleSubmit)}>
                            <h4 className="mb-3">編輯個人檔案</h4>
                            <FormGroup>
                                <Label>Email</Label>
                                <Field component="input" className="form-control" type="text" name="email"/>
                            </FormGroup>
                            <FormGroup>
                                <Label>臉書網址</Label>
                                <Field component="input" className="form-control" type="text" name="fbUrl"/>
                            </FormGroup>
                            <FormGroup>
                                <Label>個人頁面網址</Label>
                                <Field component="input" className="form-control" type="text" name="personalWebUrl"/>
                            </FormGroup>
                            <FormGroup>
                                <Label>自我介紹</Label>
                                <Field component={RichTextBox} name="introduction"/>
                            </FormGroup>
                            <Button color="primary" block type="submit">儲存</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </Profile>
        );
    }
}

export default reduxForm({form: 'userProfile'})(UserProfile)
