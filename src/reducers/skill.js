export const skillList = (state = [], action) => {
    switch (action.type) {
        case '@SKILL/LIST':
            return action.payload;
        default:
            return state;
    }
}
