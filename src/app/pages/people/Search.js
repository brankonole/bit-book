import React, { Component } from 'react';

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
                                <input id="search" type="search" required/>
                                    <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                        <i className="material-icons">close</i>
                            </div>
                        </form>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}
export default Search; 
