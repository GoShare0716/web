const USER_VIEW = {
    profile: {name: '賴詰凱', pictureUrl: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/14907205_1735976403393352_4070401399338628514_n.jpg?oh=8e78a4702aab2048c89adf574c9fb43e&oe=5A020917', email: 'skyle0115@gmail.com', fbUrl: 'https://www.facebook.com/skyle0115', personalWebUrl: '', introduction: 'Hello, World!'},
    voteSkills: [],
    equipSkills: [],
    createWorkshops: [],
    attendWorkshops: [],
};

export const viewUser = () => dispatch => {
    dispatch({type: '@USER/VIEW', payload: USER_VIEW});
};
