const SKILL_LIST = [
    {
        id: 1,
        name: 'Javascript',
        description: 'JavaScript，一種高級程式語言，通過解釋執行，是一門動態類型，物件導向（基於原型）的直譯語言。JavaScript是一門基於原型、函數先行的語言，是一門多範式的語言，它支持物件導向編程，命令式編程，以及函數式編程。',
        basic: {
            number: 20,
            friends: [
                {
                    id: 2,
                    thumbnailUrl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p32x32/16998846_1290498551040215_6726353178621101254_n.jpg?oh=87ca08598e9aa9589eeb1ad456e33c66&oe=59FF081B"
                }
            ]
        },
        advanced: {
            number: 15,
            friends: [
                {
                    id: 1,
                    thumbnailUrl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p40x40/16426235_1335337256541448_4112461475677668738_n.jpg?oh=44bcbeb78e0f146ae8a22b56e20fd444&oe=5A0AD7C3"
                }
            ]
        },
        voteLevel: 'advanced'
    }, {
        id: 2,
        name: '攝影',
        description: '攝影是指使用某種專門設備進行影像記錄的過程。一般我們使用機械照相機或者數碼照相機進行靜態圖片攝影，靜態攝影也會被稱為照相。',
        basic: {
            number: 6,
            friends: [
                {
                    id: 2,
                    thumbnailUrl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p32x32/16998846_1290498551040215_6726353178621101254_n.jpg?oh=87ca08598e9aa9589eeb1ad456e33c66&oe=59FF081B"
                }
            ]
        },
        advanced: {
            number: 12,
            friends: []
        },
        voteLevel: 'none'
    }, {
        id: 3,
        name: '素描',
        description: '素描是一種用繪圖工具使其表現在二維 二維就是平面的意思 材質上的視覺藝術和造型藝術，它的目的是在兩維的紙面上創造三維的立體形態。',
        basic: {
            number: 5,
            friends: []
        },
        advanced: {
            number: 8,
            friends: [
                {
                    id: 1,
                    thumbnailUrl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p40x40/16426235_1335337256541448_4112461475677668738_n.jpg?oh=44bcbeb78e0f146ae8a22b56e20fd444&oe=5A0AD7C3"
                }, {
                    id: 3,
                    thumbnailUrl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p32x32/16998846_1290498551040215_6726353178621101254_n.jpg?oh=87ca08598e9aa9589eeb1ad456e33c66&oe=59FF081B"
                }
            ]
        },
        voteLevel: 'basic'
    }, {
        id: 4,
        name: 'Python',
        description: 'Python 是一種物件導向、直譯式的電腦程式語言。它包含了一組功能完備的標準庫，能夠輕鬆完成很多常見的任務。',
        basic: {
            number: 6,
            friends: [
                {
                    id: 1,
                    thumbnailUrl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p40x40/16426235_1335337256541448_4112461475677668738_n.jpg?oh=44bcbeb78e0f146ae8a22b56e20fd444&oe=5A0AD7C3"
                }
            ]
        },
        advanced: {
            number: 12,
            friends: [
                {
                    id: 1,
                    thumbnailUrl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p40x40/16426235_1335337256541448_4112461475677668738_n.jpg?oh=44bcbeb78e0f146ae8a22b56e20fd444&oe=5A0AD7C3"
                }, {
                    id: 2,
                    thumbnailUrl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p32x32/16998846_1290498551040215_6726353178621101254_n.jpg?oh=87ca08598e9aa9589eeb1ad456e33c66&oe=59FF081B"
                }
            ]
        },
        voteLevel: 'none'
    }
];

export const listSkill = () => dispatch => {
    dispatch({type: '@SKILL/LIST', payload: SKILL_LIST});
};
