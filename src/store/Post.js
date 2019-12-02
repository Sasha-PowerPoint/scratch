import { types } from 'mobx-state-tree';

export default types.model({
    id        : '',
    body      : '',
    title     : '',
    'user_id' : types.string
});
