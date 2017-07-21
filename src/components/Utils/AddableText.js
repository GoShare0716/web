import React, {Component} from 'react';
import {
    Button,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

export default class AddableText extends Component {
    static defaultProps = {
        title: '您的課程有任何先決條件嗎？',
        answerPlaceHolder: '例如：您應該有使用電腦的初級能力',
    };

    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
        this.addCount = this.addCount.bind(this);
    }

    addCount(e) {
        this.setState({
            count: this.state.count + 1
        });
    }

    renderText() {
        let textArr = [];
        for (let i = 0; i < this.state.count; i++)
            textArr.push(<Input key={i} className="mb-2" type="text" placeholder={this.props.answerPlaceHolder}/>);
        return textArr;
    }

    render() {
        return (
            <FormGroup className="addable-form-group">
                <Label>{this.props.title}</Label>
                {this.renderText()}
                <Button onClick={this.addCount}>新增一個答案</Button>
            </FormGroup>
        );
    }
}
