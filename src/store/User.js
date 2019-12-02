import { types } from 'mobx-state-tree';

export default types.model({
    address      : '',
    dob          : '',
    email        : '',
    'first_name' : '',
    gender       : '',
    id           : '',
    'last_name'  : '',
    phone        : '',
    status       : '',
    website      : '',
    disabled     : types.optional(types.boolean, false)
}).views(self => ({
    get fullName() {
        return `${self.first_name} ${self.last_name}`;
    },
    get isActive() {
        return self.status === 'active';
    }
})).actions(self => ({
    toggleDisabled() {
        self.disabled = !self.disabled;
    }
}));
