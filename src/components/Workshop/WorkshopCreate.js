import React, {Component} from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Jumbotron
} from 'reactstrap';
import AddableText from '../Utils/AddableText';
import {Field, reduxForm} from 'redux-form';

class WorkshopCreate extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(form) {
        console.log(form)
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="inner create">
                <h1 className="mt-5 mb-3">成為講者</h1>
                <Jumbotron className="create-process">
                    <h3>流程</h3>
                    <ol>
                        <li>請在個人頁面的自我介紹中附上工作坊相關的簡歷與作品集。</li>
                        <li>完成下列表單並送出審核（發佈前仍可以修改）。</li>
                        <li>無論是否通過，共學將會盡早聯絡您，並協助您籌辦工作坊。</li>
                        <li>審核通過後，即可填寫更詳盡的工作坊內容。</li>
                    </ol>
                </Jumbotron>
                <div className="create-form">
                    <Form onSubmit={handleSubmit(this.handleSubmit)}>
                        <FormGroup>
                            <Label>工作坊標題</Label>
                            <Field component="input" className="form-control" type="text" name="title" placeholder="例如：電腦繪圖入門" />
                        </FormGroup>
                        <FormGroup>
                            <Label>工作坊類別</Label>
                            <FormGroup check>
                                <Label check>
                                    <Field component="input" className="form-check-input" type="radio" name="category" value="technology"/>
                                    <span>科技</span>
                                </Label>
                            </FormGroup>
                            <FormGroup className="mb-0" check>
                                <Label check>
                                    <Field component="input" className="form-check-input" type="radio" name="category" value="aesthetics"/>
                                    <span>美學</span>
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <Field component={AddableText} name="requirement" title="您的工作坊有任何先決條件嗎？" placeholder="例如：您需要修過微積分一"/>
                        <Field component={AddableText} name="targetAudience" title="您的目標學生是誰？" placeholder="例如：任何對攝影有興趣的人"/>
                        <Field component={AddableText} name="goal" title="他們將會學習什麼內容？在您的工作坊結束時，學生將能夠..." placeholder="例如：建立自己的個人網站"/>
                        <Button color="primary" size="lg" block type="submit">送出審核</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default reduxForm({form: 'workshopCreate'})(WorkshopCreate)
