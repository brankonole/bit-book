import React, { Component } from 'react';

import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="row container center">
                    <div className="col s12 m12">
                        <form className="teal accent-3">
                            <div className="input-field">
                                <input className="Search-css" value={this.props.inputValue} id="search" type="search" required onChange={this.props.search} />
                                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                <i className="material-icons" onClick={this.props.clearSearchBar}>close</i>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Search; 
