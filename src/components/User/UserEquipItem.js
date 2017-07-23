import React, {Component} from 'react';
import {Button, ButtonGroup} from 'reactstrap';

class UserEquipItem extends Component {
    render() {
        return (
            <div className="w-100">

                <div className="w-100 d-flex justify-content-between align-items-center">
                    <div className="mr-2">
                        <h3>C/C++</h3>
                        <span>C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。</span>
                    </div>
                    <ButtonGroup size="sm" style={{height: 27}}>
                        <Button color="primary">入門</Button>
                        <Button>精進</Button>
                    </ButtonGroup>
                </div>
                <hr className="w-100"/>
            </div>
        );
    }
}

export default UserEquipItem;
