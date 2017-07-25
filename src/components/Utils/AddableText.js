import React, {Component} from 'react';
import {Button, FormGroup, Label, Input} from 'reactstrap';

export default class AddableText extends Component {
    static defaultProps = {
        title: '您的課程有任何先決條件嗎？',
        answerPlaceHolder: '例如：您應該有使用電腦的初級能力',
        onInputChange: (value) => {console.log(value)}
    };

    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            values: ['']
        };
        this.addInput = this.addInput.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    addInput(e) {
        let {count, values} = this.state;
        this.setState({
            count: count + 1,
            values: [
                ...values,
                ''
            ]
        });
    }

    renderInputs() {
        let inputArr = [];
        for (let i = 0; i < this.state.count; i++)
            inputArr.push(<Input onChange={e => this.onInputChange(e.target.value, i)} key={i} className="mb-2" type="text" placeholder={this.props.answerPlaceHolder}/>);
        return inputArr;
    }

    onInputChange(value, index) {
        let values = [...this.state.values];
        values[index] = value;
        this.setState({values});
        this.props.onInputChange(values.filter(value => value !== ''));
    }

    render() {
        return (
            <FormGroup className="addable-form-group">
                <Label>{this.props.title}</Label>
                {this.renderInputs()}
                <Button onClick={this.addInput}>新增一個答案</Button>
            </FormGroup>
        );
    }
}
