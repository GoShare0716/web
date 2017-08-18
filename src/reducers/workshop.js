import moment from 'moment';


export const workshopList = (state = [], action) => {
    switch (action.type) {
        case '@WORKSHOP/LIST':
            return action.payload;
        default:
            return state;
    }
}

const INIT_WORKSHOP_VIEW = {
    goal: [],
    requirement: [],
    targetAudience: [],
    description: '',
    content: '',
    attendedMsg: '',
    startDatetime: 0,
    endDatetime: 0,
    deadline: 0,
    closing: 0,
    attendees: {
        friends: [],
        number: 0
    }
}

export const workshopView = (state = INIT_WORKSHOP_VIEW, action) => {
    switch (action.type) {
        case '@WORKSHOP/VIEW':
            const {startDatetime, endDatetime, deadline, closing} = action.payload;
            action.payload.startDatetime = moment(startDatetime).format('YYYY-MM-DD[T]HH:mm');
            action.payload.endDatetime = moment(endDatetime).format('YYYY-MM-DD[T]HH:mm');
            action.payload.deadline = moment(deadline).format('YYYY-MM-DD[T]HH:mm');
            action.payload.closing = moment(closing).format('YYYY-MM-DD[T]HH:mm');
            return action.payload;
        case '@WORKSHOP/ATTEND':
            console.log(action.payload);
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

const INIT_WORKSHOP_MANAGE = {
    state: 'judging',
    published: false,
    attendees: []
}

export const workshopManage = (state = INIT_WORKSHOP_MANAGE, action) => {
    switch (action.type) {
        case '@WORKSHOP/GET_STATE':
            return {
                ...state,
                state: action.payload
            };
        case '@WORKSHOP/SET_STATE':
            return {
                ...state,
                state: action.payload
            };
        case '@WORKSHOP/GET_PUBLISHED':
            return {
                ...state,
                published: action.payload
            };
        case '@WORKSHOP/SET_PUBLISHED':
            return {
                ...state,
                published: action.payload
            };
        case '@WORKSHOP/GET_ATTENDEES':
            return {
                ...state,
                attendees: action.payload
            };
        default:
            return state;
    }
}
