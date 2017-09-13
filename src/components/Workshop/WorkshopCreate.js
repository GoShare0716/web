import {
    Button,
    Col,
    Form,
    Jumbotron,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
    Table
} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import React, {Component} from 'react';

import AddableText from '../Utils/AddableText';
import {Link} from 'react-router-dom';
import RenderField from '../Utils/RenderField';
import RenderRadio from '../Utils/RenderRadio';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createWorkshop} from '../../actions/workshop';
import {unauthenticated} from '../../actions/auth';

const VOTE_RESULT = [
    {
        name: '第一期結果',
        table: [
            {
                name: '股票入門',
                number: 54,
                speaker: 'not-invite'
            }, {
                name: 'Illustrator 插畫設計入門',
                number: 28,
                speaker: 'seeking'
            }, {
                name: 'After Effects 影片製作',
                number: 21,
                speaker: 'seeking'
            }, {
                name: '電腦繪圖入門',
                number: 18,
                speaker: 'seeking'
            }, {
                name: '資料科學入門',
                number: 15,
                speaker: 'seeking'
            }, {
                name: 'Photoshop 修圖技巧',
                number: 11,
                speaker: 'seeking'
            }, {
                name: 'Python 入門',
                number: 8,
                speaker: 'seeking'
            }, {
                name: '手作甜點',
                number: 7,
                speaker: 'not-invite'
            }, {
                name: '簡報設計技巧',
                number: 7,
                speaker: 'seeking'
            }, {
                name: '攝影入門',
                number: 6,
                speaker: 'seeking'
            }
        ]
    }
];

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
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({activeTab: tab});
        }
    }

    handleSubmit(form) {
        const {auth, unauthenticated, createWorkshop} = this.props;
        if (!auth.authenticated) {
            unauthenticated(false);
        } else {
            createWorkshop(form);
        }
    }

    renderResult() {
        return VOTE_RESULT.map(({
            name,
            table
        }, i) => {
            return (
                <Col key={i} xs={12}>
                    <h4>{name}</h4>
                    <Table responsive>
                        <tbody>
                            <tr>
                                <td className="vote-result-topic">主題</td>
                                <td className="vote-result-number">票數</td>
                            </tr>
                            {table.map(({
                                name,
                                number,
                                speaker
                            }, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{name}</td>
                                        <td>{number}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Col>
            );
        });
    }

    render() {
        const {activeTab} = this.state;
        const {handleSubmit} = this.props;
        return (
            <div className="inner my-5">
                <h1 className="mb-3">成為講者</h1>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={activeTab === '1'
                            ? 'active'
                            : ''} onClick={() => {
                            this.toggle('1');
                        }}>
                            我想教的主題
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={activeTab === '2'
                            ? 'active'
                            : ''} onClick={() => {
                            this.toggle('2');
                        }}>
                            大家想學的主題
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Jumbotron>
                            <h3>流程</h3>
                            <ol style={{
                                marginLeft: -24,
                                marginBottom: 0
                            }}>
                                <li>編輯個人頁面的臉書、作品連結和自我介紹。</li>
                                <li>填寫下列表單並送出，我們會盡早聯絡您。</li>
                                <li>審核通過後，再填寫更詳盡的工作坊內容。</li>
                            </ol>
                        </Jumbotron>
                        <Form onSubmit={handleSubmit(this.handleSubmit)}>
                            <Field component={RenderField} label="工作坊標題" type="text" name="title" placeholder="例如：電腦繪圖入門"/>
                            <Field component={RenderRadio} label="工作坊類別" name="category" options={CATEGORY_OPTIONS}/>
                            <Field component={AddableText} label="您的工作坊有任何先決條件嗎？" name="requirement" placeholder="例如：您需要修過微積分一"/>
                            <Field component={AddableText} label="您的目標學生是誰？" name="targetAudience" placeholder="例如：任何對攝影有興趣的人"/>
                            <Field component={AddableText} label="他們將會學習什麼內容？在您的工作坊結束時，學生將能夠..." name="goal" placeholder="例如：建立自己的個人網站"/>
                            <Button color="primary" size="lg" block type="submit">送出審核</Button>
                        </Form>
                    </TabPane>
                    <TabPane tabId="2">
                        <Jumbotron>
                            <p>下方是過去的主題票選結果，若您有興趣分享以下主題，請於螢幕右下方的訊息框留言，我們會盡早與您聯絡。</p>
                        </Jumbotron>
                        <h3>歷史票選結果</h3>
                        <Row>
                            {this.renderResult()}
                        </Row>
                    </TabPane>
                </TabContent>

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
