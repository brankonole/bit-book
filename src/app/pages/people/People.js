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
            allUsers: [],
            filteredUsers: []
        }
    }

    componentDidMount() {
        dataService.fetchAllUsers()
        .then(res => 
             this.setState({
            allUsers: res,
            filteredUsers: res
        }))
    }
// search bar 
    search = (e) => {
    e.preventDefault();
    const users = this.state.allUsers
    const filter = users.filter(element => element.name.toLowerCase().startsWith(e.target.value.toLowerCase()) )
    this.setState({
        filteredUsers: filter
    })

    }


    render() {   
        return (
            <React.Fragment>
                <Search search={this.search}/>
        {(this.state.allUsers.length !== 0? this.state.filteredUsers.map(element => <SingleUser data={element}/>): <SingleUserPlaceHolder/> )}
            </React.Fragment>
        )
    }
}
export default People;
