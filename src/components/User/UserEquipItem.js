import React, {Component} from 'react';
import MultipleButton from '../Utils/MultipleButton';

class UserEquipItem extends Component {
    render() {
        return (
            <div className="w-100">
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <div className="mr-2">
                        <h3>C/C++</h3>
                        <span>C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。</span>
                    </div>
                    <MultipleButton options={[['入門', 'basic'], ['精進', 'advanced']]} cancellable style={{
                        height: 27
                    }}/>
                </div>
                <hr className="w-100"/>
            </div>
        );
    }
}

export default UserEquipItem;
