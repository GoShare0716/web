const INIT_USER = {
    profile: {
        introduction: ''
    },
    createWorkshops: [],
    attendWorkshops: []
};

export const user = (state = INIT_USER, action) => {
    switch (action.type) {
        case '@USER/VIEW':
            return action.payload;
        case '@USER/SET_EMAIL':
        case '@USER/SET_FB_URL':
        case '@USER/SET_PERSONAL_WEB_URL':
        case '@USER/SET_INTRODUCTION':
            let nextState = {
                ...state
            };
            nextState.profile = {
                ...nextState.profile,
                ...action.payload
            };
            return nextState;
        default:
            return state;
    }
}
