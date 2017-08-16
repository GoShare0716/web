import './WorkshopUpdate.css';

import {Button, Form} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import React, {Component} from 'react';

import AddableText from '../Utils/AddableText';
import ImageUpload from '../Utils/ImageUpload';
import RenderField from '../Utils/RenderField';
import RenderRadio from '../Utils/RenderRadio';
import RichTextBox from '../Utils/RichTextBox';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {viewWorkshop} from '../../actions/workshop';







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
    if (!values.title) {
        errors.title = 'Required'
    }
    if (!values.category) {
        errors.category = 'Required'
    }
    if (!values.requirement || values.requirement.filter(r => r !== '').length === 0) {
        errors.requirement = 'Required'
    }
    if (!values.targetAudience || values.targetAudience.filter(r => r !== '').length === 0) {
        errors.targetAudience = 'Required'
    }
    if (!values.goal || values.goal.filter(r => r !== '').length === 0) {
        errors.goal = 'Required'
    }
    if (values.deadline >= values.closing) {
        errors.deadline = '報名截止時間需大於調查截止時間';
        errors.closing = '報名截止時間需大於調查截止時間';
    }
    return errors;
}

class WorkshopUpdate extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.props.viewWorkshop();
    }

    handleSubmit(form) {
        console.log(form)
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="inner workshop-update">
                <Form onSubmit={handleSubmit(this.handleSubmit)}>
                    <h1 className="mt-5 mb-3">編輯工作坊</h1>
                    <Field component={RenderField} label="標題" type="text" name="title" placeholder="例如：電腦繪圖入門"/>
                    <Field component={RenderRadio} label="類別" name="category" options={CATEGORY_OPTIONS}/>
                    <Field component={AddableText} label="您的工作坊有任何先決條件嗎？" name="requirement" placeholder="例如：您需要修過微積分一"/>
                    <Field component={AddableText} label="您的目標學生是誰？" name="targetAudience" placeholder="例如：任何對攝影有興趣的人"/>
                    <Field component={AddableText} label="他們將會學習什麼內容？在您的工作坊結束時，學生將能夠..." name="goal" placeholder="例如：建立自己的個人網站"/>
                    <Field component={ImageUpload} name="imageUrl"/>
                    <Field component={RenderField} label="開始時間" type="datetime-local" name="startDatetime"/>
                    <Field component={RenderField} label="結束時間" type="datetime-local" name="endDatetime"/>
                    <Field component={RenderField} label="地點" type="text" name="location"/>
                    <Field component={RenderField} label="達標前預購價" type="number" name="prePrice"/>
                    <Field component={RenderField} label="達標後原價" type="number" name="price"/>
                    <Field component={RenderField} label="最低人數" type="number" name="minNumber"/>
                    <Field component={RenderField} label="最高人數" type="number" name="maxNumber"/>
                    <Field component={RenderField} label="調查截止時間" type="datetime-local" name="deadline"/>
                    <Field component={RenderField} label="報名截止時間" type="datetime-local" name="closing"/>
                    <Field component={RichTextBox} label="簡介" name="description" ref="description" withRef/>
                    <Field component={RichTextBox} label="詳細介紹" name="content"/>
                    <Field component={RichTextBox} label="報名成功訊息" name="attendedMsg"/>
                    <Button color="primary" size="lg" block type="submit">儲存</Button>
                </Form>
            </div>
        );
    }
}

function mapStateToProps({workshopView}) {
    return {initialValues: workshopView};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        viewWorkshop
    }, dispatch);
}

WorkshopUpdate = reduxForm({form: 'workshopUpdate', enableReinitialize: true, validate})(WorkshopUpdate)
WorkshopUpdate = connect(mapStateToProps, mapDispatchToProps)(WorkshopUpdate);

export default WorkshopUpdate;
