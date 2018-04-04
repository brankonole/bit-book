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
import SingleUser from './pages/people/SingleUser';
import SingleUserPage from "./pages/single_user/SingleUserPage"

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    }
  }

  handleLogIn = (isLoggedIn,e) => {
    // e.preventDefault();
    this.setState({
      isLoggedIn: isLoggedIn
    })
  }

  render() {
    console.log(this.state.isLoggedIn)
    return (
      <React.Fragment>
        <Header/>
        <main>
          {sessionStorage.getItem("userInfo")?
          <Switch>
            <Redirect from='/login' to='/feed' component={Feed}/>
            <Route path='/profile' component={Profile}/>
            <Route exact path='/people' component={People}/>
            <Route exact path='/feed' component={Feed}/>
            {/*dodati su type i id, da bi smo mogli da fetchujemo single postove*/}
            <Route exact path="/feed/:type/:id" component={SingleFeed}/> 
            <Route exact path="/login" component={LoginRegister}/>
            <Route exact path="/register" component={LoginRegister}/>
            {/* <Redirect from="/" to="/home" /> */}
            <Route exact path='/' component={Feed}/>
            {/* SingleUserPage leads you to profile of some user other than you*/}
            <Route exact path="/singleUser/:id" component={SingleUserPage} />
          </Switch> :
          <Switch>
            <Route path='/login' render={() => <LoginRegister loggedIn={this.handleLogIn} />} />
            <Route path='/register' component={LoginRegister} />
            <Redirect from='/' to='/login' component={LoginRegister} />
          </Switch>}
        </main>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;