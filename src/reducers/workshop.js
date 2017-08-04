export const workshopList = (state = [], action) => {
    switch (action.type) {
        case '@WORKSHOP/LIST':
            return action.payload;
        default:
            return state;
    }
}
