import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SingleUser from './SingleUser';
import Search from './Search';
import { dataService } from "../../../services/DataService"
import SingleUserPlaceHolder from "./SingleUserPlaceHolder"

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: []
        }
    }

    componentDidMount() {
        dataService.fetchAllUsers()
        .then(res => 
             this.setState({
            allUsers: res
        }))
    }


    render() {
        return (
            <React.Fragment>
                <Search/>
        {(this.state.allUsers.length !== 0? this.state.allUsers.map(element => <SingleUser data={element}/>): <SingleUserPlaceHolder/> )}
            </React.Fragment>
        )
    }
}
export default People;
