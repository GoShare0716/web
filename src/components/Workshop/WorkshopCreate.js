import {Button, Form, Jumbotron} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import React, {Component} from 'react';

import AddableText from '../Utils/AddableText';
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
    return errors;
}

class WorkshopCreate extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        const {auth, unauthenticated} = this.props;
        if (!auth.authenticated) {
            unauthenticated();
        }
    }

    handleSubmit(form) {
        this.props.createWorkshop(form);
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="inner create">
                <h1 className="mt-5 mb-3">成為講者</h1>
                <Jumbotron className="create-process">
                    <h3>流程</h3>
                    <ol>
                        <li>請在個人頁面的自我介紹中附上與工作坊主題相關的簡歷與作品集。</li>
                        <li>完成下列表單並送出審核（發佈前仍可以修改）。</li>
                        <li>無論是否通過，我們會盡早聯絡您，協助您籌辦工作坊。</li>
                        <li>審核通過後，即可填寫更詳盡的工作坊內容。</li>
                    </ol>
                </Jumbotron>
                <div className="create-form">
                    <Form onSubmit={handleSubmit(this.handleSubmit)}>
                        <Field component={RenderField} label="工作坊標題" type="text" name="title" placeholder="例如：電腦繪圖入門"/>
                        <Field component={RenderRadio} label="工作坊類別" name="category" options={CATEGORY_OPTIONS}/>
                        <Field component={AddableText} label="您的工作坊有任何先決條件嗎？" name="requirement" placeholder="例如：您需要修過微積分一"/>
                        <Field component={AddableText} label="您的目標學生是誰？" name="targetAudience" placeholder="例如：任何對攝影有興趣的人"/>
                        <Field component={AddableText} label="他們將會學習什麼內容？在您的工作坊結束時，學生將能夠..." name="goal" placeholder="例如：建立自己的個人網站"/>
                        <Button color="primary" size="lg" block type="submit">送出審核</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        unauthenticated,
        createWorkshop
    }, dispatch);
}

WorkshopCreate = reduxForm({form: 'workshopCreate', validate})(WorkshopCreate)
WorkshopCreate = connect(mapStateToProps, mapDispatchToProps)(WorkshopCreate);

export default WorkshopCreate;
