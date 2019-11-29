import { types, getSnapshot } from 'mobx-state-tree';

const User = types.model({
    id        : '',
    firstName : '',
    lastName  : '',
    gender    : ''
}).views(self => ({
    get fullName() {
        return `${self.firstName} ${self.lastName}`;
    }
})).actions(self => ({
    іsetFirtsName() {
        self.firstName = '77777777777';
    }
}));

const Post = types.model({
    id        : '',
    body      : '',
    title     : '',
    'user_id' : types.string
});

export const john = User.create({ name: 'Vasiliy' });

const RootStore = types.model({
    users : types.array(User),
    posts : types.array(Post)
});

const state = {
    users : [
        {
            id        : '1',
            firstName : 'sdas',
            lastName  : 'asdsa',
            gender    : 'asdsda'
        },
        {
            id        : '2',
            firstName : 'ddddd',
            lastName  : 'asdsa',
            gender    : 'asdsda'
        }
    ],
    posts : [
        {
            id        : '1',
            body      : 'sad',
            title     : 'asd',
            'user_id' : 'b'
        },
        {
            id        : '2',
            body      : 'a',
            title     : 'd',
            'user_id' : 'b'
        }
    ]
};

const store = RootStore.create(state);

console.log(store.users[0].fullName);
store.users[0].setFirtsName();
console.log(store.users[0].fullName);
