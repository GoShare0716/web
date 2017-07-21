import React, {Component} from 'react';
import {
    Col,
    Card,
    CardText,
    CardBlock,
    CardTitle,
    Button,
    ButtonGroup,
    CardFooter
} from 'reactstrap';

export default class SkillListItem extends Component {
    render() {
        return (
            <Col className="mb-3" xs={12} lg={6}>
                <Card>
                    <CardBlock>
                        <CardTitle>C/C++</CardTitle>
                        <CardText>C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。C是一種通用的程式語言，廣泛用於系統軟體與應用軟體的開發。</CardText>
                    </CardBlock>
                    <CardFooter className="d-flex">
                        <ButtonGroup size="sm mr-auto">
                            <Button>我想入門</Button>
                            <Button>我想精進</Button>
                        </ButtonGroup>
                        <div className="hidden-xs-down">
                            <img className="mr-1" width="25px" src="https://scontent.ftpe3-2.fna.fbcdn.net/v/t1.0-1/c0.25.64.64/p64x64/18622427_1859238271067164_3869120362467491071_n.jpg?oh=84e54bc64012d3fdcfb2236d78ca96b8&oe=59FF9727" alt="fb"/>
                            <img className="mr-1" width="25px" src="https://scontent.ftpe3-2.fna.fbcdn.net/v/t1.0-1/p64x64/18033585_1336400693122300_4338329632218462346_n.jpg?oh=44fcd106553b6fb14fee1301e3177bc7&oe=5A085465" alt="fb"/>
                            <img className="mr-1" width="25px" src="https://scontent.ftpe3-2.fna.fbcdn.net/v/t1.0-1/p64x64/18118862_1251599901620224_3927080533890936169_n.jpg?oh=8e6f9da9f9f718bd5155fa3f2d372066&oe=5A0749CD" alt="fb"/>
                            <img className="mr-1" width="25px" src="https://scontent.ftpe3-2.fna.fbcdn.net/v/t1.0-1/p64x64/16998846_1290498551040215_6726353178621101254_n.jpg?oh=4d40aa385af693ba711f71cdfba6dfbc&oe=5A080DB4" alt="fb"/>
                        </div>
                        <button type="button" className="btn btn-secondary btn-sm">+26</button>
                    </CardFooter>
                </Card>
            </Col>
        );
    }
}
