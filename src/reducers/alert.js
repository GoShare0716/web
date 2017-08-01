const defaultState = {
    msg: null,
    type: null,
    isOpen: false
};

export function alert(state = defaultState, action) {
    switch (action.type) {
        case '@ALERT/SHOW':
            return action.payload;
        case '@ALERT/HIDE':
            return {isOpen: false};
        default:
            return state;
    }
}
