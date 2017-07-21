import React, {Component} from 'react';
import {
    Button,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import AddableText from '../Utils/AddableText';

export default class WorkshopUpdate extends Component {
    render() {
        return (
            <div className="inner">
                <h1 className="mt-5 mb-3">編輯工作坊</h1>
                <FormGroup>
                    <Label>標題</Label>
                    <Input type="text"/>
                </FormGroup>
                <FormGroup tag="fieldset">
                    <Label>工作坊類別</Label>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1"/>
                            <span>科技</span>
                        </Label>
                    </FormGroup>
                    <FormGroup className="mb-0" check>
                        <Label check>
                            <Input type="radio" name="radio1"/>
                            <span>美學</span>
                        </Label>
                    </FormGroup>
                </FormGroup>
                <AddableText title="您的工作坊有任何先決條件嗎？" answerPlaceHolder="例如：您需要修過微積分一"/>
                <AddableText title="您的目標學生是誰？" answerPlaceHolder="例如：任何對攝影有興趣的人"/>
                <AddableText title="他們將會學習什麼內容？在您的工作坊結束時，學生將能夠..." answerPlaceHolder="例如：建立自己的個人網站"/>
                <FormGroup>
                    <Label>封面圖片連結</Label>
                    <Input className="mb-2" type="url"/>
                    <img className="w-100" src="https://placeholdit.imgix.net/~text?w=1080&h=540" alt=""/>
                </FormGroup>
                <FormGroup>
                    <Label>開始時間</Label>
                    <Input type="datetime-local"/>
                </FormGroup>
                <FormGroup>
                    <Label>結束時間</Label>
                    <Input type="datetime-local"/>
                </FormGroup>
                <FormGroup>
                    <Label>地點</Label>
                    <Input type="text"/>
                </FormGroup>
                <FormGroup>
                    <Label>費用</Label>
                    <Input type="number"/>
                </FormGroup>
                <FormGroup>
                    <Label>最低人數</Label>
                    <Input type="number"/>
                </FormGroup>
                <FormGroup>
                    <Label>最高人數</Label>
                    <Input type="number"/>
                </FormGroup>
                <FormGroup>
                    <Label>調查截止時間</Label>
                    <Input type="datetime-local"/>
                </FormGroup>
                <FormGroup>
                    <Label>報名截止調查時間</Label>
                    <Input type="datetime-local"/>
                </FormGroup>
                <FormGroup>
                    <Label>簡介</Label>
                    <Input type="textarea" rows="5"/>
                </FormGroup>
                <FormGroup>
                    <Label>詳細簡介</Label>
                    <Input type="textarea" rows="10"/>
                </FormGroup>
                <FormGroup>
                    <Label>行前調查連結</Label>
                    <Input type="url"/>
                </FormGroup>
                <Button className="create-btn" color="primary" size="lg" block>送出</Button>
            </div>
        );
    }
}
