const defaultState = {
    authenticated: false
}

export function auth(state = defaultState, action) {
    switch (action.type) {
        case '@AUTH/LOGIN_SUCCESS':
            return {authenticated: true};
        case '@AUTH/LOGIN_FAIL':
            return {authenticated: false};
        case '@AUTH/LOGOUT':
            return {authenticated: false};
        default:
            return state;
    }
}
