import React from 'react';

const SingleUser = () => {
    return (
        <React.Fragment>
            <div className="row container center">
                <div className="col s12 m12">
                    <div className="card horizontal hoverable">
                        <i className="large material-icons">account_circle</i>
                        <div className="card-content left-align">
                            <p><b>JANE DOE</b></p>
                            <p>Short user description. Short user description. Short user description.</p>
                        </div>
                        <div className="right-align">
                            <p>Last post at 7:53</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SingleUser;