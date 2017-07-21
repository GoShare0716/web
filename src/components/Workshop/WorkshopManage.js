import React, {Component} from 'react';
import {Row, Col, Button, ButtonGroup, Table} from 'reactstrap';
export default class WorkshopManage extends Component {
    render() {
        return (
            <div className="inner">
                <h1 className="mt-5 mb-3">管理工作坊</h1>
                <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <span>發布狀態</span>
                        <ButtonGroup>
                            <Button>顯示</Button>
                            <Button color="primary">隱藏</Button>
                        </ButtonGroup>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>工作坊管理</span>
                        <Button color="danger">刪除</Button>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>參加者名單</span>
                        <Button color="primary">匯出</Button>
                    </div>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}
