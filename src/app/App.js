import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import '../index.css';
import Feed from './pages/feed/Feed';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Profile from "./pages/profile/Profile"
import People from './pages/people/People';
import SingleFeed from "./pages/single_feed/SingleFeed"
import LoginRegister from "./pages/login_register/LoginRegister"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <main>
          <Switch>
            <Route path='/profile' component={Profile}/>
            <Route exact path='/people' component={People}/>
            <Route exact path='/feed' component={Feed}/>
            
            {/*dodati type i id, da bi smo mogli da fetchujemo single postove*/}
            <Route exact path="/feed/:type/:id" component={SingleFeed}/> 
            <Route exact path="/home" component={LoginRegister}/>
            <Redirect from="/" to="/home" />
            <Route exact path='/' component={Feed}/>
          </Switch>
        </main>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;