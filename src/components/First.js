import React from 'react';
import { withRouter } from 'react-router-dom';

class First extends React.Component {
    render() {
        console.log(this.props);

        return (
            <>
                <div>First</div>
            </>);
    }
}


export default withRouter(First);
