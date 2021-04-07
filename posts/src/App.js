import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import './App.css';
import Home from './page/Home'
import PostsDetails from './page/PostsDetails';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/posts'>
            <Home />
          </Route>
          <Route exact path='/posts/:id'>
            <PostsDetails />
          </Route>
          <Route exact path="/" component={ () => <Redirect to="/posts" /> } />
        </Switch>
      </BrowserRouter> 
    </>
  );
}

export default App;
