import moment from 'moment';


export const workshopList = (state = [], action) => {
    switch (action.type) {
        case '@WORKSHOP/LIST':
            return action.payload;
        default:
            return state;
    }
}

const defaultWorkshopViewState = {
    goal: [],
    requirement: [],
    targetAudience: [],
    description: '',
    content: '',
    startDatetime: 0,
    endDatetime: 0,
    deadline: 0,
    closing: 0,
    attendees: {
        friends: [],
        number: 0
    }
}

export const workshopView = (state = defaultWorkshopViewState, action) => {
    switch (action.type) {
        case '@WORKSHOP/VIEW':
            const {startDatetime, endDatetime, deadline, closing} = action.payload;
            action.payload.startDatetime = moment(startDatetime).format('YYYY-MM-DD[T]HH:mm');
            action.payload.endDatetime = moment(endDatetime).format('YYYY-MM-DD[T]HH:mm');
            action.payload.deadline = moment(deadline).format('YYYY-MM-DD[T]HH:mm');
            action.payload.closing = moment(closing).format('YYYY-MM-DD[T]HH:mm');
            return action.payload;
        default:
            return state;
    }
}
