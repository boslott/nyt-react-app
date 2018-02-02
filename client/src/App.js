import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Nav } from './components/Nav/Nav';
// import { Navbar } from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import SavedArticles from './pages/SavedArticles';
// import NoMatch from "./pages/NoMatch";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Navbar /> */}
          <Nav />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/saved-articles' component={SavedArticles} />
            {/* <Route exact path="/" component={Books} /> */}
            {/* <Route exact path="/books" component={Books} /> */}
            {/* <Route exact path="/books/:id" component={Detail} /> */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
