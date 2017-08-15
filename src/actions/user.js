export const viewUser = () => dispatch => {
    dispatch({type: '@USER/VIEW', payload: USER_VIEW});
};

const USER_VIEW = {
    profile: {
        name: '賴詰凱',
        pictureUrl: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/14907205_1735976403393352_4070401399338628514_n.jpg?oh=8e78a4702aab2048c89adf574c9fb43e&oe=5A020917',
        email: 'skyle0115@gmail.com',
        fbUrl: 'https://www.facebook.com/skyle0115',
        personalWebUrl: '',
        introduction: 'Hello, World!'
    },
    createWorkshops: [
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
        }
    ],
    attendWorkshops: [
        {
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
    ]
};
