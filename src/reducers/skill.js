export const skillList = (state = [], action) => {
    switch (action.type) {
        case '@SKILL/LIST':
            return action.payload;
        default:
            return state;
    }
}

const defaultskillViewState = {
    vote: {
        basic: {
            friends: []
        },
        advanced: {
            friends: []
        }
    },
    equip: {
        basic: {
            friends: []
        },
        advanced: {
            friends: []
        }
    }
};

export const skillView = (state = defaultskillViewState, action) => {
    switch (action.type) {
        case '@SKILL/VIEW':
            return action.payload;
        default:
            return state;
    }
}
