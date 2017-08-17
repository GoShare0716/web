import './User.css';

import {
    Button,
    Form,
    Modal,
    ModalBody,
    Row
} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import React, {Component} from 'react';

import Profile from '../Utils/Profile';
import RenderField from '../Utils/RenderField';
import RichTextBox from '../Utils/RichTextBox';
import WorkshopListItem from '../Workshop/WorkshopListItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {viewUser} from '../../actions/user';







const MODULES = {
    toolbar: {
        container: [
            [
                'bold', 'italic', 'underline', 'strike'
            ],
            [
                {
                    'color': []
                }, {
                    'background': []
                }
            ],
            [
                'link'
            ],
            ['clean']
        ]
    }
};

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required'
    }
    return errors;
}

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.modalToggle = this.modalToggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    modalToggle() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(form) {
        console.log(form)
    }

    componentDidMount() {
        this.props.viewUser();
    }

    render() {
        const {
            user: {
                profile,
                createWorkshops,
                attendWorkshops
            },
            handleSubmit
        } = this.props;
        return (
            <div className="outer user">
                <Profile profile={profile}>
                    <Button onClick={this.modalToggle}>編輯</Button>
                    <Modal className="user-profile-modal" isOpen={this.state.isModalOpen} toggle={this.modalToggle}>
                        <ModalBody>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="close" onClick={this.modalToggle}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <Form onSubmit={handleSubmit(this.handleSubmit)}>
                                <h4 className="mb-3">編輯個人檔案</h4>
                                <Field component={RenderField} label="Email" type="text" name="email"/>
                                <Field component={RenderField} label="臉書網址" type="text" name="fbUrl"/>
                                <Field component={RenderField} label="個人頁面網址" type="text" name="personalWebUrl"/>
                                <Field component={RichTextBox} label="自我介紹" name="introduction" modules={MODULES}/>
                                <Button color="primary" block type="submit">儲存</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </Profile>
                <div className="user-propose">
                    <h3>我主辦的工作坊</h3>
                    <hr/>
                    <Row>{createWorkshops.map((c, i) => <WorkshopListItem key={c.id} {...c}/>)}</Row>
                </div>
                <div className="user-attend">
                    <h3>我報名的工作坊</h3>
                    <hr/>
                    <Row>{attendWorkshops.map((a, i) => <WorkshopListItem key={a.id} {...a}/>)}</Row>
                </div>
            </div>
        );
    }
}

function mapStateToProps({user}) {
    return {user, initialValues: user.profile};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        viewUser
    }, dispatch);
}

User = reduxForm({form: 'userProfile', enableReinitialize: true, validate})(User)
User = connect(mapStateToProps, mapDispatchToProps)(User);

export default User;
