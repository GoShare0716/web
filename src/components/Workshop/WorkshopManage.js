import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Table
} from 'reactstrap';
import React, {Component} from 'react';
import {getWorkshopAttendees, getWorkshopPublished, getWorkshopState, setWorkshopPublished, setWorkshopState} from '../../actions/workshop';

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

        this.dropdownToggle = this.dropdownToggle.bind(this);
        this.state = {
            isDropdownOpen: false,
            workshopState: 'judging'
        };
    }

    dropdownToggle() {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen
        });
    }

    renderAttendees(attendees) {
        return attendees.map((a, i) => {
            return (
                <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>
                        <Link to={`/user/${a.userId}`}>{a.name}</Link>
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
        if (auth.authenticated) {
            getWorkshopState();
            getWorkshopPublished();
            getWorkshopAttendees();
        } else {
            unauthenticated();
        }
    }

    render() {
        const {state, published, attendees} = this.props.workshopManage;
        const role = localStorage.getItem('role');
        return (
            <div className="inner">
                <h1 className="mt-5 mb-3">管理工作坊</h1>
                <div className="mb-3">
                    {role === 'admin' && <div className="d-flex justify-content-between align-items-center">
                        <span>工作坊狀態</span>
                        <Dropdown isOpen={this.state.isDropdownOpen} toggle={this.dropdownToggle}>
                            <DropdownToggle caret>{state}</DropdownToggle>
                            <DropdownMenu>{STATE_OPTIONS.map((s, i) => <DropdownItem key={i} onClick={e => this.props.setWorkshopState(s)}>{s}</DropdownItem>)}</DropdownMenu>
                        </Dropdown>
                    </div>}
                    {role === 'admin' && <hr/>}
                    <div className="d-flex justify-content-between align-items-center">
                        <span>顯示狀態</span>
                        <MultipleButton options={PUBLISHED_OPTIONS} value={published} onChange={v => this.props.setWorkshopPublished(v)}/>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>刪除工作坊</span>
                        <Button color="danger">刪除</Button>
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
        setWorkshopPublished
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopManage);
