import { types, flow  } from 'mobx-state-tree';
import API              from '../api';
import User             from './User';
import Post             from './Post';

const api = new API();


const RootStore = types.model({
    users        : types.array(User),
    posts        : types.array(Post),
    usersLoading : types.optional(types.boolean, true),
    postsLoading : types.optional(types.boolean, true)
})
    .actions(self => ({
        fetchUsers : flow(function* fetchUsers() {
            self.users = [];
            self.usersLoading = true;
            try {
                self.users = yield api.get('users');
                self.usersLoading = false;
            } catch (error) {
                console.error('Failed to fetch projects', error);
                self.state = 'error';
            }
        }),
        fetchPosts : flow(function* fetchPosts() {
            self.posts = [];
            self.postsLoading = true;
            try {
                self.posts = yield api.get('posts');
                self.postsLoading = false;
            } catch (error) {
                console.error('Failed to fetch projects', error);
                self.state = 'error';
            }
        })

    }));

const state = {
    users : [
        {
            address      : '93202 Kovacek Islands↵New Grover, CA 10357-7437',
            dob          : '1921-11-14',
            email        : 'oreilly.letha@example.org',
            'first_name' : 'Willa',
            gender       : 'female',
            id           : '1',
            'last_name'  : 'Gerlach',
            phone        : '+1 (243) 356-0621',
            status       : 'inactive',
            website      : 'https://www.grimes.info/quisquam-eius-sint-corrupti-repellendus-laboriosam'
        },
        {
            address      : '98705 Kristina Motorway↵North Dock, GA 66538-3205',
            dob          : '1983-07-21',
            email        : 'powlowski.aubree@example.net',
            'first_name' : 'Emily',
            gender       : 'female',
            id           : '2',
            'last_name'  : 'Price',
            phone        : '389-483-6536',
            status       : 'inactive',
            website      : 'http://www.homenick.com/'
        },
        {
            address      : '546 Alice Forges Apt. 091↵Altenwerthshire, CT 64764',
            dob          : '1938-10-30',
            email        : 'selmer.harris@example.org',
            'first_name' : 'Gilberto',
            gender       : 'male',
            id           : '3',
            'last_name'  : 'McCullough',
            phone        : '378.233.5279 x9162',
            status       : 'active',
            website      : 'http://graham.com/qui-ab-in-magni-id-dolore-quibusdam-unde'
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

export default store;
