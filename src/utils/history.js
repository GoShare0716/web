import createHistory from 'history/createBrowserHistory';


var scroll = require('scroll');
var page = require('scroll-doc')();

const history = createHistory();

history.listen(location => {
    setTimeout(() => {
        if (location.action === 'POP' || location.hash !== '') {
            const ele = document.getElementById(location.hash.substring(1));
            if (ele) {
                scroll.top(page, ele.offsetTop - 56);
            }
            return;
        }
        scroll.top(page, 0);
    });
});

export {history};
