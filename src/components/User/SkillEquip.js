import React, { Component } from 'react';
import {
    Col,
    Card,
    CardText,
    CardBlock,
    CardTitle,
    Button,
    ButtonGroup,
    CardFooter,
    Badge
} from 'reactstrap';

import './SkillEquip.css';

class SkillEpuip extends Component {

    render() {
        return (
            <Col className="mb-3" xs={12} md={6} lg={4}>
                <Card className="user-skill-equip">
                    <div>
                        <i className="fa fa-4x fa-plus" aria-hidden="true" style={{
                            color: 'white'
                        }}></i>
                    </div>
                </Card>
            </Col>
        );
    }

}

export default SkillEpuip;
