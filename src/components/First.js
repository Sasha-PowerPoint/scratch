import React from 'react';
import { withRouter } from 'react-router-dom';

class First extends React.Component {
    render() {
        console.log(this.props);

        return (
            <>
                <h1>First</h1>
                <pre>{JSON.stringify(this.props, null, 4)}</pre>
            </>);
    }
}


export default withRouter(First);
