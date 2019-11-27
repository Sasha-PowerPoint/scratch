import { stringify, parse } from 'querystring';
import { createBrowserHistory } from 'history';
import qhistory from 'qhistory';


export const history = qhistory(
    createBrowserHistory({ /* history configuration options */ }),
    stringify,
    parse
);

