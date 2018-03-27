import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../index.css';
import Feed from './pages/feed/Feed';
import Header from './partials/Header';
import Footer from './partials/Footer';
import People from './pages/people/People';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <main>
          <Switch>
            <Route exact path='/people' component={People}/>
            <Route exact path='/feed' component={Feed}/>
          </Switch>
        </main>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;