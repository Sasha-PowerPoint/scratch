import ApiClient   from './ApiClient.js';
import SessionsAPI from './Sessions.js';
import PostsAPI    from './Posts.js';

export default function ({ apiPrefix } = {}) {
    if (!apiPrefix) {
        throw new Error('[apiPrefix] required');
    }

    const api = new ApiClient({ prefix: apiPrefix });

    return {
        apiClient : api,
        sessions  : new SessionsAPI({ apiClient: api }),
        posts     : new PostsAPI({ apiClient: api })
    };
}
