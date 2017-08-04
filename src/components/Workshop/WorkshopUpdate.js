import React, {Component} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import AddableText from '../Utils/AddableText';
import RichTextBox from '../Utils/RichTextBox';
import ImageUpload from '../Utils/ImageUpload';
import {Field, reduxForm} from 'redux-form';

class WorkshopUpdate extends Component {
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
            <div className="inner">
                <Form onSubmit={handleSubmit(this.handleSubmit)}>
                    <h1 className="mt-5 mb-3">編輯工作坊</h1>
                    <FormGroup>
                        <Label>標題</Label>
                        <Field component="input" className="form-control" type="text" name="title" placeholder="例如：電腦繪圖入門"/>
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
                    <Field component={ImageUpload} name="imageUrl"/>
                    <FormGroup>
                        <Label>開始時間</Label>
                        <Field component="input" className="form-control" type="datetime-local" name="startDatetime"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>結束時間</Label>
                        <Field component="input" className="form-control" type="datetime-local" name="endDatetime"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>地點</Label>
                        <Field component="input" className="form-control" type="text" name="location"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>達標前預購價</Label>
                        <Field component="input" className="form-control" type="number" name="prePrice"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>達標後原價</Label>
                        <Field component="input" className="form-control" type="number" name="price"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>最低人數</Label>
                        <Field component="input" className="form-control" type="number" name="minNumber"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>最高人數</Label>
                        <Field component="input" className="form-control" type="number" name="maxNumber"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>調查截止時間</Label>
                        <Field component="input" className="form-control" type="datetime-local" name="deadline"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>報名截止時間</Label>
                        <Field component="input" className="form-control" type="datetime-local" name="closing"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>簡介</Label>
                        <Field component={RichTextBox} name="description"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>詳細簡介</Label>
                        <Field component={RichTextBox} name="content"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>報名成功訊息</Label>
                        <Field component={RichTextBox} name="attendedMsg"/>
                    </FormGroup>
                    <Button color="primary" size="lg" block type="submit">儲存</Button>
                </Form>
            </div>
        );
    }
}

export default reduxForm({form: 'workshopUpdate'})(WorkshopUpdate)
