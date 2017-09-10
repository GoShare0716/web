import './WorkshopManage.css';

import {
    Button,
    Collapse,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table
} from 'reactstrap';
import React, {Component} from 'react';
import {
    deleteWorkshop,
    getWorkshopAttendees,
    getWorkshopPublished,
    getWorkshopState,
    setWorkshopPublished,
    setWorkshopState
} from '../../actions/workshop';

import {CSVLink} from 'react-csv';
import {Link} from 'react-router-dom';
import MultipleButton from '../Utils/MultipleButton';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import moment from 'moment';
import {unauthenticated} from '../../actions/auth';







const STATE_OPTIONS = ['judging', 'judge_na', 'judge_ac', 'reached', 'unreached'];

const PUBLISHED_OPTIONS = [
    {
        text: '發佈',
        value: true
    }, {
        text: '取消',
        value: false
    }
];

class WorkshopManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            workshopState: 'judging',
            isDropdownOpen: false,
            isModalOpen: false,
            isCollapseOpen: false
        };

        this.dropdownToggle = this.dropdownToggle.bind(this);
        this.modalToggle = this.modalToggle.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this)
        this.collapseToggle = this.collapseToggle.bind(this);
    }

    dropdownToggle() {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen
        });
    }

    modalToggle() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    onDeleteClick(id) {
        this.props.deleteWorkshop(id);
    }

    collapseToggle() {
        this.setState({
            isCollapseOpen: !this.state.isCollapseOpen
        });
    }

    renderAttendees(attendees) {
        return attendees.map((a, i) => (
            <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>
                    <Link to={`/user/${a.id}`}>{a.name}</Link>
                </td>
                <td>{a.email}</td>
                <td className="text-center">{a.canceled
                        ? '取消'
                        : '報名'}</td>
            </tr>
        ));
    }

    componentWillMount() {
        const {auth, unauthenticated, getWorkshopState, getWorkshopPublished, getWorkshopAttendees} = this.props;
        const {id} = this.state;
        if (auth.authenticated) {
            getWorkshopState(id);
            getWorkshopPublished(id);
            getWorkshopAttendees(id);
        } else {
            unauthenticated();
        }
    }

    render() {
        const {id, isCollapseOpen} = this.state;
        const {state, published, attendees} = this.props.workshopManage;
        const role = localStorage.getItem('role');
        return (
            <div className="inner my-5">
                <div className="d-flex justify-content-between align-items-end mb-3">
                    <h1 className="m-0">管理工作坊</h1>
                    <Link to={`/workshop/${id}`}>返回</Link>
                </div>
                {role === 'admin' && <div className="workshop-manage-item">
                    <span>工作坊狀態</span>
                    <Dropdown isOpen={this.state.isDropdownOpen} toggle={this.dropdownToggle}>
                        <DropdownToggle caret>{state}</DropdownToggle>
                        <DropdownMenu>{STATE_OPTIONS.map((s, i) => <DropdownItem key={i} onClick={e => this.props.setWorkshopState(id, s)}>{s}</DropdownItem>)}</DropdownMenu>
                    </Dropdown>
                </div>}
                {role === 'admin' && <hr/>}
                <div className="workshop-manage-item">
                    <span>發佈工作坊</span>
                    <MultipleButton options={PUBLISHED_OPTIONS} value={published} onChange={v => this.props.setWorkshopPublished(id, v)}/>
                </div>
                <hr/>
                <div className="workshop-manage-item">
                    <span>刪除工作坊</span>
                    <Button color="danger" onClick={this.modalToggle}>刪除</Button>
                </div>
                <hr/>
                <div className="workshop-manage-item">
                    <span>匯出報名人列表</span>
                    <CSVLink data={attendees.map(a => ({
                        name: a.name,
                        email: a.email,
                        state: a.canceled
                            ? '取消'
                            : '報名'
                    }))} filename={`${moment().format('YYYY-MM-DD-hh-mm-ss')}.csv`} className="btn btn-primary" target="_blank">
                        匯出
                    </CSVLink>
                </div>
                <hr/>
                <div className="workshop-manage-item">
                <span>預覽報名人列表</span>
                <Button color="primary" onClick={this.collapseToggle}>{isCollapseOpen ? '收回' : '預覽'}</Button>

                </div>
                <Collapse isOpen={isCollapseOpen}>
                    <Table responsive className="mt-3">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className="workshop-manage-attendees-name">姓名</th>
                                <th>Email</th>
                                <th className="workshop-manage-attendees-attended">狀態</th>
                            </tr>
                        </thead>
                        <tbody>{this.renderAttendees(attendees)}</tbody>
                    </Table>
                </Collapse>
                <Modal isOpen={this.state.isModalOpen} toggle={this.modalToggle}>
                    <ModalHeader>刪除工作坊</ModalHeader>
                    <ModalBody>
                        注意：刪除工作坊後就無法再復原
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.modalToggle}>再考慮一下</Button>
                        <Button color="danger" onClick={e => this.onDeleteClick(id)}>刪除工作坊</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps({auth, workshopManage}) {
    return {auth, workshopManage};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        unauthenticated,
        getWorkshopState,
        getWorkshopPublished,
        getWorkshopAttendees,
        setWorkshopState,
        setWorkshopPublished,
        deleteWorkshop
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopManage);
