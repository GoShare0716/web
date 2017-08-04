const SKILL_LIST = [
    {
        id: 1,
        name: 'Javascript',
        category: 'technology',
        description: 'JavaScript (JS) is a programming language mostly used client-side to dynamically script webpages, but often also server-side.',
        videoUrl: 'https://www.youtube.com/watch?v=Ukg_U3CnJWI',
        visible: true,
        basic: {
            number: 6,
            friends: []
        },
        advanced: {
            number: 12,
            friends: [
                {
                    id: 1,
                    thumbnailUrl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p40x40/16426235_1335337256541448_4112461475677668738_n.jpg?oh=44bcbeb78e0f146ae8a22b56e20fd444&oe=5A0AD7C3"
                }, {
                    id: 3,
                    thumbnailUrl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p80x80/14915540_1715220865464246_4727687316731100143_n.jpg?oh=ad9590fd0ee9b970cf82e2cd35bfb70d&oe=59C4DCB2"
                }
            ]
        },
        voteLevel: 'advanced',
        equipLevel: 'basic'
    }
];

export const skillList = (state = [], action) => {
    switch (action.type) {
        case '@USER/VIEW':
            return action.payload;
        default:
            return state;
    }
}
