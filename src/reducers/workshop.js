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
    content: ''
}

export const workshopView = (state = defaultWorkshopViewState, action) => {
    switch (action.type) {
        case '@WORKSHOP/VIEW':
            return action.payload;
        default:
            return state;
    }
}
