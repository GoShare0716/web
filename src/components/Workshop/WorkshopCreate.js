import './WorkshopCreate.css';

import {Button, Form} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import React, {Component} from 'react';
import {setUserEmail, setUserFbUrl, setUserPersonalWebUrl, viewUser} from '../../actions/user';

import LoginModal from '../Utils/LoginModal';
import RenderField from '../Utils/RenderField';
import RenderRadio from '../Utils/RenderRadio';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createWorkshop} from '../../actions/workshop';
import {unauthenticated} from '../../actions/auth';

const CATEGORY_OPTIONS = [
    {
        text: '科技',
        value: 'technology'
    }, {
        text: '美學',
        value: 'aesthetics'
    }
];

const validate = values => {
    const errors = {};
    if (!values.title || !values.title.trim()) {
        errors.title = '主題不可為空';
    }
    if (!values.category) {
        errors.category = '類別不可為空';
    }
    if (!values.email) {
        errors.email = 'Email 不可為空';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email 格式錯誤';
    }
    if (!values.fbUrl) {
        errors.fbUrl = '臉書網址不可為空';
    }
    if (!values.personalWebUrl) {
        errors.personalWebUrl = '作品網址不可為空';
    }
    return errors;
}

class WorkshopCreate extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const {auth, viewUser} = this.props;
        if (auth.authenticated) {
            viewUser('me');
        }
    }

    componentWillReceiveProps(nextProps) {
        const {auth, viewUser} = this.props;
        if (!auth.authenticated && nextProps.auth.authenticated) {
            viewUser('me');
        }
    }

    handleSubmit({title, category, email, fbUrl, personalWebUrl}) {
        const {createWorkshop, setUserEmail, setUserFbUrl, setUserPersonalWebUrl, user} = this.props;
        const {id} = user.profile;
        createWorkshop({title, category});
        setUserEmail(id, email);
        setUserFbUrl(id, fbUrl);
        setUserPersonalWebUrl(id, personalWebUrl);
    }

    render() {
        const {auth, handleSubmit, loading} = this.props;
        return (
            <div className="workshop-create full">
                <div className="workshop-create-form-container">
                    <h1 className="mb-3 text-center">成為講者</h1>
                    <Form className="workshop-create-form" onSubmit={handleSubmit(this.handleSubmit)}>
                        <Field component={RenderField} label="想分享的主題" type="text" name="title" placeholder="例如：電腦繪圖"/>
                        <Field component={RenderRadio} label="主題類別" name="category" options={CATEGORY_OPTIONS}/>
                        <Field component={RenderField} label="Email" type="text" name="email"/>
                        <Field component={RenderField} label="臉書網址" type="url" name="fbUrl"/>
                        <Field component={RenderField} label="作品網址" type="url" name="personalWebUrl"/>
                        <Button color="primary" size="lg" block type="submit" disabled={loading === 1}>送出審核</Button>
                        <small>收到後我們會盡快與您聯絡</small>
                    </Form>
                </div>
                {auth.authenticated === false && <LoginModal/>}
            </div>
        );
    }
}

function mapStateToProps({auth, user, loadingBar}) {
    return {auth, initialValues: user.profile, user, loading: loadingBar};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        unauthenticated,
        viewUser,
        createWorkshop,
        setUserEmail,
        setUserFbUrl,
        setUserPersonalWebUrl
    }, dispatch);
}

WorkshopCreate = reduxForm({form: 'workshopCreate', enableReinitialize: true, validate})(WorkshopCreate)
WorkshopCreate = connect(mapStateToProps, mapDispatchToProps)(WorkshopCreate);

export default WorkshopCreate;
