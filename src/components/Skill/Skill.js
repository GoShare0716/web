import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Modal, ModalBody} from 'reactstrap';

import {viewSkill} from '../../actions/skill';

import Vote from '../Utils/Vote';

const VOTE_TITLE = ['我想入門', '我想精進'];
const EQUIP_TITLE = ['我已經入門', '我已經精進'];

class Skill extends Component {
    componentWillMount() {
        this.props.viewSkill();
    }

    render() {
        let {isOpen, toggle} = this.props;
        let {
            id,
            name,
            category,
            description,
            videoUrl,
            vote,
            equip
        } = this.props.skillView;
        return (
            <Modal isOpen={isOpen} toggle={toggle} size="lg">
                <ModalBody>
                    <div className="d-flex justify-content-end">
                        <button type="button" className="close" onClick={toggle}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="mb-3 d-flex flex-column align-items-center">
                        <h1 className="mb-3">{name}</h1>
                        <span>{description}</span>
                        <hr className="w-100 my-3"/>
                        <Vote title={VOTE_TITLE} vote={vote}/>
                        <Vote className="mt-2" title={EQUIP_TITLE} vote={equip}/>
                    </div>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${videoUrl}`} title="Youtube"></iframe>
                    </div>
                </ModalBody>
            </Modal>
        );
    }

}

function mapStateToProps({skillView}) {
    return {skillView};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        viewSkill
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Skill);
