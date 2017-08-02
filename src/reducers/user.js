const deafaultState = {
    profile: {},
    voteSkills: [],
    equipSkills: [],
    createWorkshops: [],
    attendWorkshops: [],
};

export const user = (state = deafaultState, action) => {
    switch (action.type) {
        case '@USER/VIEW':
            return action.payload;
        default:
            return state;
    }
}
