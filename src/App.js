import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Provider} from 'react-redux'
import store from './store/store'
import Header from './components/commons/Header'
import Home from './components/home/Home'
import My from './components/my/My';
import Modal from './components/commons/Modal';
import Additional from './components/commons/Additional';
import Login from './components/commons/Login';
import Suggest from './components/commons/Suggest';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/*<Login/>*/}
        <Header/>
        {/*<Additional/>*/}
        {/*<Suggest/>*/}
        {/*<Modal/>*/}
        {/*<Switch>*/}
        {/*  <Route path={'/Home'} component={Home}/>*/}
        {/*  <Route path={'/My'} component={My}/>*/}
        {/*  <Route component={Home}/>*/}
        {/*</Switch>*/}
      </Router>
    </Provider>
  );
}

export default App;
