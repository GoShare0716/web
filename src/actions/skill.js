export const listSkill = () => dispatch => {
    dispatch({type: '@SKILL/LIST', payload: SKILL_LIST});
};

export const viewSkill = () => dispatch => {
    dispatch({type: '@SKILL/VIEW', payload: SKILL_VIEW});
};

const SKILL_VIEW = {
    id: 1,
    name: 'Javascript',
    category: 'technology',
    description: 'JavaScript，一種高級程式語言，通過解釋執行，是一門動態類型，物件導向（基於原型）的直譯語言。JavaScript是一門基於原型、函數先行的語言，是一門多範式的語言，它支持物件導向編程，命令式編程，以及函數式編程。',
    videoUrl: 'Ukg_U3CnJWI',
    vote: {
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
        level: 'advanced'
    },
    equip: {
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
        level: 'null'
    }
}

const SKILL_LIST = [
    {
        id: 1,
        name: 'Javascript',
        description: 'JavaScript，一種高級程式語言，通過解釋執行，是一門動態類型，物件導向（基於原型）的直譯語言。JavaScript是一門基於原型、函數先行的語言，是一門多範式的語言，它支持物件導向編程，命令式編程，以及函數式編程。',
        imageUrl: 'http://1ke.co/files/course/2017/05-16/155510ea3d57934560.jpg?4.9.3',
        vote: {
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
            level: 'advanced'
        }
    }, {
        id: 2,
        name: '人工智慧',
        description: '攝影是指使用某種專門設備進行影像記錄的過程。一般我們使用機械照相機或者數碼照相機進行靜態圖片攝影，靜態攝影也會被稱為照相。',
        imageUrl: 'http://i.imgur.com/bbk7IUY.jpg',
        vote: {
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
            level: 'none'
        }
    }, {
        id: 3,
        name: '物聯網',
        description: '素描是一種用繪圖工具使其表現在二維 二維就是平面的意思 材質上的視覺藝術和造型藝術，它的目的是在兩維的紙面上創造三維的立體形態。',
        imageUrl: 'https://3.bp.blogspot.com/-0L0Bzf-bfIw/V3ThB97TFJI/AAAAAAACvTI/iP9w_xhiq14t8KoGLVOsL0ZdAhwzMpMfgCKgB/s600/IoT.png',
        vote: {
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
            level: 'basic'
        }
    }, {
        id: 4,
        name: 'Python',
        description: 'Python 是一種物件導向、直譯式的電腦程式語言。它包含了一組功能完備的標準庫，能夠輕鬆完成很多常見的任務。',
        imageUrl: 'https://udemy-images.udemy.com/course/750x422/567828_67d0.jpg',
        vote: {
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
                number: 6,
                friends: [
                    {
                        id: 1,
                        thumbnailUrl: "https://scontent.xx.fbcdn.net/v/t1.0-1/c0.19.50.50/p50x50/18622427_1859238271067164_3869120362467491071_n.jpg?oh=3c51ad379f496d4de20e0c18759614d8&oe=5A31E1D7"
                    }, {
                        id: 2,
                        thumbnailUrl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p32x32/16998846_1290498551040215_6726353178621101254_n.jpg?oh=87ca08598e9aa9589eeb1ad456e33c66&oe=59FF081B"
                    }
                ]
            },
            level: 'none'
        }
    }, {
        id: 4,
        name: '虛擬實境',
        description: 'Python 是一種物件導向、直譯式的電腦程式語言。它包含了一組功能完備的標準庫，能夠輕鬆完成很多常見的任務。',
        imageUrl: 'http://router-u.com/wp-content/uploads/2015/03/pinc-vr_headset.jpg',
        vote: {
            basic: {
                number: 4,
                friends: [
                    {
                        id: 1,
                        thumbnailUrl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p40x40/16426235_1335337256541448_4112461475677668738_n.jpg?oh=44bcbeb78e0f146ae8a22b56e20fd444&oe=5A0AD7C3"
                    }
                ]
            },
            advanced: {
                number: 6,
                friends: [
                    {
                        id: 2,
                        thumbnailUrl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p32x32/16998846_1290498551040215_6726353178621101254_n.jpg?oh=87ca08598e9aa9589eeb1ad456e33c66&oe=59FF081B"
                    }
                ]
            },
            level: 'basic'
        }
    }, {
        id: 4,
        name: '區塊鏈',
        description: 'Python 是一種物件導向、直譯式的電腦程式語言。它包含了一組功能完備的標準庫，能夠輕鬆完成很多常見的任務。',
        imageUrl: 'http://crawl.nosdn.127.net/7d50664f8c94b65f6805439b837751cd/b07ba8c329f430e2140fcb673e26b2ce.png',
        vote: {
            basic: {
                number: 2,
                friends: [
                    {
                        id: 1,
                        thumbnailUrl: "https://scontent.xx.fbcdn.net/v/t1.0-1/c0.19.50.50/p50x50/18622427_1859238271067164_3869120362467491071_n.jpg?oh=3c51ad379f496d4de20e0c18759614d8&oe=5A31E1D7"
                    }
                ]
            },
            advanced: {
                number: 6,
                friends: [
                    {
                        id: 1,
                        thumbnailUrl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p40x40/16426235_1335337256541448_4112461475677668738_n.jpg?oh=44bcbeb78e0f146ae8a22b56e20fd444&oe=5A0AD7C3"
                    }
                ]
            },
            level: 'advanced'
        }
    }, {
        id: 4,
        name: '擴增實境',
        description: 'Python 是一種物件導向、直譯式的電腦程式語言。它包含了一組功能完備的標準庫，能夠輕鬆完成很多常見的任務。',
        imageUrl: 'http://images.1111.com.tw/discussPic/97/48117497_27941636.1590162.jpg',
        vote: {
            basic: {
                number: 3,
                friends: [
                    {
                        id: 1,
                        thumbnailUrl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p40x40/16426235_1335337256541448_4112461475677668738_n.jpg?oh=44bcbeb78e0f146ae8a22b56e20fd444&oe=5A0AD7C3"
                    }
                ]
            },
            advanced: {
                number: 3,
                friends: [
                    {
                        id: 2,
                        thumbnailUrl: "https://scontent.xx.fbcdn.net/v/t1.0-1/c0.19.50.50/p50x50/18622427_1859238271067164_3869120362467491071_n.jpg?oh=3c51ad379f496d4de20e0c18759614d8&oe=5A31E1D7"
                    }
                ]
            },
            level: 'none'
        }
    }, {
        id: 4,
        name: '機器學習',
        description: 'Python 是一種物件導向、直譯式的電腦程式語言。它包含了一組功能完備的標準庫，能夠輕鬆完成很多常見的任務。',
        imageUrl: 'http://www.tutortristar.com/wordpress/wp-content/uploads/2015/05/machine-learning.jpg',
        vote: {
            basic: {
                number: 2,
                friends: []
            },
            advanced: {
                number: 1,
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
            level: 'basic'
        }
    }
];
