import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  Routes
} from "react-router-dom";
import Home from './home';
import Users from './users';
import User from './user';
import One_News from './one_news';
import Posts from './posts';
import Post from './post';
import SignInSide from './registration/signIn';
import SignUp from './registration/signUp';
import MenuAppBar from './Common/log';

const Webpages = () => {
    return(
        <Router>
            <Switch>
            <Route exact path ="/" component= {Home} />
            <Route path = "/users" component = {Users} />
            <Route path = "/user/:id" component = {User} />
            <Route path = "/news/" component = {One_News} />
            <Route path = "/posts/" component = {Posts} />
            <Route path = "/post/:id" component = {Post} />
            <Route path = "/signin/" component = {SignInSide} />
            <Route path = "/signup/" component = {SignUp} />
            <Route path = "/log/" component = {MenuAppBar} />
            <Redirect to="/" />
            </Switch>  
        </Router>
    );
};
export default Webpages;