import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import ComNavbar from './components/ComNavbar';
import Footer from './components/Footer';
import SafeZone from './pages/SafeZone';
import NoMatch from './pages/NoMatch';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Chat from './pages/Chat';
import News from './pages/News';

function App() {
  return (
    <Router>
      <div>
        <ComNavbar />
        <Switch>
          <Route exact path="/" component={SafeZone} />
          <Route exact path="/signup/" component={Signup} />
          <Route exact path="/login/" component={Login} />
          <Route exact path="/chat/" component={Chat} />
          <Route exact path="/news/" component={News} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
