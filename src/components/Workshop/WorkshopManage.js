import {
    Button,
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
        text: '顯示',
        value: true
    }, {
        text: '隱藏',
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
            isModalOpen: false
        };

        this.dropdownToggle = this.dropdownToggle.bind(this);
        this.modalToggle = this.modalToggle.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this)
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

    renderAttendees(attendees) {
        return attendees.map((a, i) => {
            return (
                <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>
                        <Link to={`/user/${a.id}`}>{a.name}</Link>
                    </td>
                    <td>{a.email}</td>
                    <td>{a.canceled
                            ? '取消'
                            : '報名'}</td>
                </tr>
            );
        });
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
        const {id} = this.state;
        const {state, published, attendees} = this.props.workshopManage;
        const role = localStorage.getItem('role');
        return (
            <div className="inner">
                <div className="d-flex justify-content-between align-items-end mt-5 mb-3">
                    <h1 className="m-0">管理工作坊</h1>
                    <Link to={`/workshop/${id}`}>返回工作坊</Link>
                </div>                
                <div className="mb-3">
                    {role === 'admin' && <div className="d-flex justify-content-between align-items-center">
                        <span>工作坊狀態</span>
                        <Dropdown isOpen={this.state.isDropdownOpen} toggle={this.dropdownToggle}>
                            <DropdownToggle caret>{state}</DropdownToggle>
                            <DropdownMenu>{STATE_OPTIONS.map((s, i) => <DropdownItem key={i} onClick={e => this.props.setWorkshopState(id, s)}>{s}</DropdownItem>)}</DropdownMenu>
                        </Dropdown>
                    </div>}
                    {role === 'admin' && <hr/>}
                    <div className="d-flex justify-content-between align-items-center">
                        <span>顯示狀態</span>
                        <MultipleButton options={PUBLISHED_OPTIONS} value={published} onChange={v => this.props.setWorkshopPublished(id, v)}/>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>刪除工作坊</span>
                        <Button color="danger" onClick={this.modalToggle}>刪除</Button>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>參加者名單</span>
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
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>姓名</th>
                            <th>Email</th>
                            <th>狀態</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderAttendees(attendees)}</tbody>
                </Table>
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
