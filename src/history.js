import { stringify, parse } from 'query-string';
import { createBrowserHistory } from 'history';
import qhistory from 'qhistory';


export const history = qhistory(
    createBrowserHistory({ /* history configuration options */ }),
    stringify,
    parse
);

