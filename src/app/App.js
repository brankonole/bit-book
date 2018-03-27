import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../App.css';
import Feed from './pages/feed/Feed';
import Header from './partials/Header';
import Footer from './partials/Footer';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Header/> */}
        <main>
          <Switch>
            <Route to='/feed' component={Feed}/>
          </Switch>
        </main>
        {/* <Footer/> */}
      </React.Fragment>
    );
  }
}

export default App;