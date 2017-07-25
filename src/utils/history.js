import createHistory from 'history/createBrowserHistory';
const history = createHistory();

history.listen(location => {
    setTimeout(() => {
        if (location.action === 'POP' || location.pathname.startsWith('/skill')) {
            return;
        }
        window.scrollTo(0, 0);
    });
});

export {history};
