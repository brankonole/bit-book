import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SingleUser from './SingleUser';
import Search from './Search';

class People extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Search/>
                <SingleUser/>
                <SingleUser/>
                <SingleUser/>
                <SingleUser/>
                <SingleUser/>
            </React.Fragment>
        )
    }
}
export default People;
