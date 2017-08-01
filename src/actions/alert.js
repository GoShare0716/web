export const deliverAlert = (msg, type, delay = 3000) => dispatch => {
    dispatch({
        type: '@ALERT/SHOW',
        payload: {
            msg,
            type,
            isOpen: true
        }
    });
    setTimeout(() => dispatch(hideAlert()), delay);
}

export const hideAlert = () => ({type: '@ALERT/HIDE'});
