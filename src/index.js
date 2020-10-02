import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Switch,Redirect } from './react-router-dom'
// import { HashRouter as Router, Route,Link,Switch ,Redirect} from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'



ReactDOM.render(
  (
    <Router>
      <Link to="/">首页</Link> ||
      <Link to="/user">用户</Link> ||
      <Link to="/profile">个人中心</Link> ||
      <hr />
      <Switch>

        <Route path="/" component={Home} exact />
        <Route path="/user" component={User} />
        <Route path="/profile" component={Profile} />
        <Redirect from="/xxx" to="/" />
      </Switch>
    </Router>
  ),
  document.getElementById('root')
);

