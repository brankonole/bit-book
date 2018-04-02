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
                    filteredUsers: res,
                    inputValue: ''
                }))
    }
    // search bar 
    search = (e) => {
        e.preventDefault();
        const users = this.state.allUsers

        /// set state za input value

        this.setState({
            inputValue: e.target.value
        })

        // we use function filter to sort array of users
        const filter = users.filter(element => {
            // we are dividing this code in two parts
            // first if users have name and surname
            if (element.name.split(" ").length > 1)
            /// conditions of filter function must be in return
           { return (
               /// search first name
                element.name.split(" ")[0].toLowerCase().startsWith(e.target.value.toLowerCase()) ||
                // search last name
                 element.name.split(" ")[1].toLowerCase().startsWith(e.target.value.toLowerCase()) ||
                 /// search first and last name with spaces
                 element.name.toLowerCase().startsWith(e.target.value.toLowerCase())
            )}
           // in this case we are handling situation where we have user with just name and not surname 
            else {
               return  element.name.toLowerCase().startsWith(e.target.value.toLowerCase())
            }

        })
        this.setState({
            filteredUsers: filter
        })
    }

    // clear search bar

    clearSearchBar = (e) => {
        this.setState({
            inputValue: '',
            filteredUsers: this.state.allUsers
        })
    }
 



    render() {
        return (
            <React.Fragment>
                <Search search={this.search} inputValue={this.state.inputValue} clearSearchBar={this.clearSearchBar}/>
             {(this.state.allUsers.length !== 0 ? this.state.filteredUsers.map(element => <Link to="/singleUser"><SingleUser data={element} /></Link>) : <SingleUserPlaceHolder />)} 
            </React.Fragment>
        )
    }
}
export default People;
