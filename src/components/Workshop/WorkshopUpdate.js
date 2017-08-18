import './WorkshopUpdate.css';

import {Button, Form} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import React, {Component} from 'react';
import {updateWorkshop, viewWorkshop} from '../../actions/workshop';

import AddableText from '../Utils/AddableText';
import ImageUpload from '../Utils/ImageUpload';
import RenderField from '../Utils/RenderField';
import RenderRadio from '../Utils/RenderRadio';
import RichTextBox from '../Utils/RichTextBox';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
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

const getDisabled = (phase) => {
    let createDisabled,
        deadlineDisabled,
        restDisabled,
        submitDisabled;
    if (localStorage.getItem('role') === 'admin') {
        createDisabled = deadlineDisabled = restDisabled = submitDisabled = false;
    } else {
        createDisabled = false;
        deadlineDisabled = true;
        if (phase === 'investigating' || phase === 'over' || phase === 'closing' || phase === 'full' || phase === 'reached' || phase === 'unreached') {
            restDisabled = false;
        } else {
            restDisabled = true;
        }
        submitDisabled = false;
    }
    return {createDisabled, deadlineDisabled, restDisabled, submitDisabled};
};

const validate = (values, {initialValues: phase}) => {
    const {createDisabled, restDisabled} = getDisabled(phase);
    const errors = {};
    if (!createDisabled) {
        if (!values.title || !values.title.trim()) {
            errors.title = '標題不可為空';
        }
        if (!values.category) {
            errors.category = '類別不可為空';
        }
        if (!values.requirement || values.requirement.filter(r => r.trim() !== '').length === 0) {
            errors.requirement = '請至少填寫一項先決條件';
        }
        if (!values.targetAudience || values.targetAudience.filter(t => t.trim() !== '').length === 0) {
            errors.targetAudience = '請至少填寫一種目標學生';
        }
        if (!values.goal || values.goal.filter(g => g.trim() !== '').length === 0) {
            errors.goal = '請至少填寫一個學習內容';
        }
    }
    if (!restDisabled) {
        if (!values.startDatetime) {
            errors.startDatetime = '開始時間不可為空';
        }
        if (!values.endDatetime) {
            errors.endDatetime = '結束時間不可為空';
        }
        if (values.startDatetime && values.endDatetime && values.startDatetime >= values.endDatetime) {
            errors.startDatetime = errors.endDatetime = '結束時間需大於開始時間';
        }
        if (!values.prePrice) {
            errors.prePrice = '募課預售價不可為空';
        } else if (parseInt(values.prePrice, 10) < 0) {
            errors.prePrice = '募課預售價不可為負數';
        }
        if (!values.price) {
            errors.price = '達標後售價不可為空';
        } else if (parseInt(values.price, 10) < 0) {
            errors.price = '達標後售價不可為負數';
        }
        if (!values.minNumber) {
            errors.minNumber = '最低人數不可為空';
        } else if (parseInt(values.minNumber, 10) < 0) {
            errors.minNumber = '最低人數不可為負數';
        }
        if (!values.maxNumber) {
            errors.maxNumber = '最高人數不可為空';
        } else if (parseInt(values.maxNumber, 10) < 0) {
            errors.maxNumber = '最高人數不可為負數';
        }
        if (values.minNumber && values.maxNumber && parseInt(values.minNumber, 10) > parseInt(values.maxNumber, 10)) {
            errors.minNumber = errors.maxNumber = '最高人數需大於最低人數';
        }
        if (!values.deadline) {
            errors.deadline = '報名截止時間不可為空';
        }
        if (!values.closing) {
            errors.closing = '調查截止時間不可為空';
        }
        if (values.deadline && values.closing && values.deadline >= values.closing) {
            errors.deadline = errors.closing = '報名截止時間需大於調查截止時間';
        }
    }
    return errors;
}

class WorkshopUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createDisabled: false,
            deadlineDisabled: false,
            restDisabled: false,
            submitDisabled: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(form) {
        this.props.updateWorkshop(form);
    }

    componentWillMount() {
        const {auth, viewWorkshop, unauthenticated} = this.props;
        const {id} = this.props.match.params;
        if (auth.authenticated) {
            viewWorkshop(id);
        } else {
            unauthenticated();
        }
    }

    componentWillReceiveProps({initialValues: {
            phase
        }}) {
        this.setState(getDisabled(phase));
    }

    render() {
        const {createDisabled, deadlineDisabled, restDisabled, submitDisabled} = this.state;
        const {handleSubmit} = this.props;
        return (
            <div className="inner workshop-update">
                <Form onSubmit={handleSubmit(this.handleSubmit)}>
                    <h1 className="mt-5 mb-3">編輯工作坊</h1>
                    <Field component={RenderField} label="標題" type="text" name="title" placeholder="例如：電腦繪圖入門" disabled={createDisabled}/>
                    <Field component={RenderRadio} label="類別" name="category" options={CATEGORY_OPTIONS} disabled={createDisabled}/>
                    <Field component={AddableText} label="您的工作坊有任何先決條件嗎？" name="requirement" placeholder="例如：您需要修過微積分一" disabled={createDisabled}/>
                    <Field component={AddableText} label="您的目標學生是誰？" name="targetAudience" placeholder="例如：任何對攝影有興趣的人" disabled={createDisabled}/>
                    <Field component={AddableText} label="他們將會學習什麼內容？在您的工作坊結束時，學生將能夠..." name="goal" placeholder="例如：建立自己的個人網站" disabled={createDisabled}/>
                    <Field component={ImageUpload} name="imageUrl" disabled={restDisabled}/>
                    <Field component={RenderField} label="開始時間" type="datetime-local" name="startDatetime" disabled={restDisabled}/>
                    <Field component={RenderField} label="結束時間" type="datetime-local" name="endDatetime" disabled={restDisabled}/>
                    <Field component={RenderField} label="地點" type="text" name="location" disabled={restDisabled}/>
                    <Field component={RenderField} label="募課預售價" type="number" name="prePrice" disabled={restDisabled}/>
                    <Field component={RenderField} label="達標後售價" type="number" name="price" disabled={restDisabled}/>
                    <Field component={RenderField} label="最低人數" type="number" name="minNumber" disabled={restDisabled}/>
                    <Field component={RenderField} label="最高人數" type="number" name="maxNumber" disabled={restDisabled}/>
                    <Field component={RenderField} label="調查截止時間" type="datetime-local" name="deadline" disabled={deadlineDisabled}/>
                    <Field component={RenderField} label="報名截止時間" type="datetime-local" name="closing" disabled={restDisabled}/>
                    <Field component={RichTextBox} label="簡介" name="description" ref="description" withRef disabled={restDisabled}/>
                    <Field component={RichTextBox} label="詳細介紹" name="content" disabled={restDisabled}/>
                    <Field component={RichTextBox} label="報名成功訊息" name="attendedMsg" disabled={restDisabled}/>
                    <Button color="primary" size="lg" block type="submit" disabled={submitDisabled}>儲存</Button>
                </Form>
            </div>
        );
    }
}

function mapStateToProps({auth, workshopView}) {
    return {auth, initialValues: workshopView};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        unauthenticated,
        viewWorkshop,
        updateWorkshop
    }, dispatch);
}

WorkshopUpdate = reduxForm({form: 'workshopUpdate', enableReinitialize: true, validate})(WorkshopUpdate)
WorkshopUpdate = connect(mapStateToProps, mapDispatchToProps)(WorkshopUpdate);

export default WorkshopUpdate;
