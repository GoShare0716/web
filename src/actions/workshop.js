export const listWorkshop = () => dispatch => {
    dispatch({type: '@WORKSHOP/LIST', payload: WORKSHOP_LIST});
};

export const createWorkshop = () => dispatch => {
    console.log('createWorkshop');
};

export const viewWorkshop = () => dispatch => {
    dispatch({type: '@WORKSHOP/VIEW', payload: WORKSHOP_VIEW});
};

const WORKSHOP_VIEW = {
    id: 2,
    phase: 'investigating',
    author: {
        id: 1,
        pictureUrl: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/14907205_1735976403393352_4070401399338628514_n.jpg?oh=70a840220c248b11e3674c348421d695&oe=5A299617',
        name: '賴詰凱',
        fbUrl: 'https://www.facebook.com/skyle0115',
        personalWebUrl: 'https://www.facebook.com/',
        introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis quod culpa minus temporibus! Eveniet magni esse deserunt ratione minus amet animi, qui cupiditate sunt perferendis, inventore labore modi unde.'
    },
    isAuthor: true,
    imageUrl: 'https://proguide.com.sg/wp-content/uploads/2017/03/Course-Graphics-10-1.png',
    title: '0 基礎網頁設計工作坊',
    category: 'technology',
    goal: [
        '使用 HTML/CSS 建立自己的網頁', '修改現成的模板', '將靜態網頁發布至 Github Page'
    ],
    requirement: [
        '一台電腦', '一顆熱忱的心'
    ],
    targetAudience: ['任何對網頁設計有興趣的人'],
    startDatetime: 1503489600000,
    endDatetime: 1503496800000,
    location: '線上討論',
    prePrice: 0,
    price: 50,
    minNumber: 10,
    maxNumber: 20,
    deadline: 1503057600000,
    closing: 1503144000000,
    description: '<h4>Hello, world!</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam amet aperiam, cum, saepe totam ea non doloremque nostrum maxime, aspernatur libero, sapiente delectus. Illo maiores nemo, beatae quas quam ipsam?</p>',
    content: '<h4>HTML</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p><h4>CSS</h4><p>Est eveniet ut minima a repudiandae tempora maiores corporis, nihil incidunt? Tenetur quasi suscipit labore, perspiciatis odit quis blanditiis atque possimus libero!</p>',
    attendedMsg: '<h4>ALERT!!!</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas magnam, necessitatibus obcaecati eum mollitia velit. At autem odit magni obcaecati, provident, natus recusandae neque, laborum consequatur quos alias, molestias ratione.</p>',
    attendees: {
        friends: [
            {
                id: 2,
                name: '張嘉軒'
            },
            {
                id: 3,
                name: '林湘庭'
            },
        ],
        number: 5,
    },
    attended: false,
    canceled: false
};

const WORKSHOP_LIST = [
    {
        id: 1,
        imageUrl: 'https://proguide.com.sg/wp-content/uploads/2017/03/Course-Graphics-10-1.png',
        title: 'C/C++ 程式設計入門',
        author: {
            name: '賴詰凱'
        },
        minNumber: 10,
        maxNumber: 20,
        deadline: 1503057600000,
        closing: 1503144000000,
        startDatetime: 1503489600000,
        prePrice: 0,
        price: 50,
        attendeesNumber: 5,
        phase: 'investigating'
    }, {
        id: 2,
        imageUrl: 'https://www.bradhussey.ca/wp-content/uploads/2013/09/Banner.png',
        title: '0 基礎網頁設計工作坊',
        author: {
            name: '賴詰凱'
        },
        minNumber: 10,
        maxNumber: 20,
        deadline: 1503057600000,
        closing: 1503144000000,
        startDatetime: 1503489600000,
        prePrice: 50,
        price: 150,
        attendeesNumber: 12,
        phase: 'reached'
    }, {
        id: 3,
        imageUrl: 'http://abeautifulmess.typepad.com/.a/6a00d8358081ff69e201bb07bc6c8e970d-800wi',
        title: 'Photoshop 入門工作坊',
        author: {
            name: '蔡欣蓓'
        },
        minNumber: 10,
        maxNumber: 20,
        deadline: 1503057600000,
        closing: 1503144000000,
        startDatetime: 1503489600000,
        prePrice: 50,
        price: 200,
        attendeesNumber: 8,
        phase: 'investigating'
    }, {
        id: 4,
        imageUrl: 'https://udemy-images.udemy.com/course/750x422/781502_305d_3.jpg',
        title: 'Python 爬蟲入門',
        author: {
            name: '張嘉軒'
        },
        minNumber: 10,
        maxNumber: 20,
        deadline: 1500811200000,
        closing: 1501416000000,
        startDatetime: 1501761600000,
        prePrice: 0,
        price: 150,
        attendeesNumber: 9,
        phase: 'over'
    }
];
