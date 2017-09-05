import './User.css';

import {Button, Form, Modal, ModalBody, Row} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import React, {Component} from 'react';
import {setUserEmail, setUserFbUrl, setUserIntroduction, setUserPersonalWebUrl, viewUser} from '../../actions/user';

import {Link} from 'react-router-dom';
import Profile from '../Utils/Profile';
import RenderField from '../Utils/RenderField';
import RichTextBox from '../Utils/RichTextBox';
import SkeletonUser from '../Skeleton/SkeletonUser';
import WorkshopItem from '../Utils/WorkshopItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {unauthenticated} from '../../actions/auth';








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
            ['link'],
            ['clean']
        ]
    }
};

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Email 不可為空';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email 格式錯誤';
    }
    return errors;
}

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };

        this.modalToggle = this.modalToggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    modalToggle() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        }, this.props.reset);
    }

    handleSubmit({email, fbUrl, personalWebUrl, introduction}) {
        const {user, setUserEmail, setUserFbUrl, setUserPersonalWebUrl, setUserIntroduction} = this.props;
        const id = user.profile.id;
        setUserEmail(id, email);
        setUserFbUrl(id, fbUrl);
        setUserPersonalWebUrl(id, personalWebUrl);
        setUserIntroduction(id, introduction);
        this.modalToggle();
    }

    componentWillMount() {
        const {location, match, auth, unauthenticated, viewUser, deliverAlert} = this.props;
        if (location.pathname === '/me') {
            if (auth.authenticated) {
                viewUser('me');
            } else {
                unauthenticated();
            }
        } else {
            viewUser(match.params.id);
        }
    }



    render() {
        if (this.props.loading) {
            return <SkeletonUser/>
        }

        const {
            location,
            user: {
                profile,
                createWorkshops,
                attendWorkshops
            },
            handleSubmit
        } = this.props;
        return (
            <div className="outer user mb-5">
                <Profile profile={profile}>
                    {location.pathname === '/me' && <div className="mt-2">
                        <Button className="mr-2" onClick={this.modalToggle}>編輯個人檔案</Button>
                        <Link to={`/user/${profile.id}`} className="btn btn-secondary">觀看訪客視角</Link>
                    </div>}
                    {location.pathname === '/me' && <Modal className="user-profile-modal" isOpen={this.state.isModalOpen} toggle={this.modalToggle}>
                        <ModalBody>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="close" onClick={this.modalToggle}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <Form onSubmit={handleSubmit(this.handleSubmit)}>
                                <h3 className="mb-3">編輯個人檔案</h3>
                                <Field component={RenderField} label="Email" type="text" name="email"/>
                                <Field component={RenderField} label="臉書網址" type="url" name="fbUrl"/>
                                <Field component={RenderField} label="作品網址" type="url" name="personalWebUrl"/>
                                <Field component={RichTextBox} label="自我介紹" name="introduction" modules={MODULES}/>
                                <Button color="primary" block type="submit">儲存</Button>
                            </Form>
                        </ModalBody>
                    </Modal>}
                </Profile>
                <div className="user-propose">
                    <h3>我主辦的工作坊</h3>
                    <hr/>
                    <Row>{createWorkshops.map((c, i) => <WorkshopItem key={c.id} {...c}/>)}</Row>
                </div>
                <div className="user-attend">
                    <h3>我報名的工作坊</h3>
                    <hr/>
                    <Row>{attendWorkshops.map((a, i) => <WorkshopItem key={a.id} {...a}/>)}</Row>
                </div>
            </div>
        );
    }
}

function mapStateToProps({auth, user, loadingBar}) {
    return {auth, user, initialValues: user.profile, loading: loadingBar};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        unauthenticated,
        viewUser,
        setUserEmail,
        setUserFbUrl,
        setUserPersonalWebUrl,
        setUserIntroduction
    }, dispatch);
}

User = reduxForm({form: 'userProfile', enableReinitialize: true, validate})(User)
User = connect(mapStateToProps, mapDispatchToProps)(User);

export default User;
