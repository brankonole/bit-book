import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../App.css';
import Feed from './pages/feed/Feed';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Profile from "./pages/profile/Profile"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Header/> */}
        <main>
          <Switch>
            {/* <Route to='/feed' component={Feed}/> */}
            <Route path='/profile' component={Profile}/>
          </Switch>
        </main>
        {/* <Footer/> */}
      </React.Fragment>
    );
  }
}

export default App;