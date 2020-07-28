import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Provider} from 'react-redux'
import store from './store/store'
import Header from './components/commons/Header'
import Home from './components/home/Home'
import My from './components/my/My';
import Author from './components/detail/Author';
import Tag from './components/detail/Tag';
import Emoticon from './components/detail/Emoticon';
import Popular from './components/popular/Popular';
import ScrollToTop from './components/commons/ScrollToTop';
import Category from './components/category/Category';
import Search from './components/search/Search';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop/>
        <Header/>
        {/*<Suggest/>*/}
        <Switch>
         <Route path={'/Home'} component={Home}/>
         <Route path={'/Popular'} component={Popular}/>
         <Route path={'/Category'} component={Category}/>
         <Route path={'/Search'} component={Search}/>
         <Route path={'/My'} component={My}/>
         <Route path={'/Author/:id'} component={Author}/>
         <Route path={'/Tag/:name'} component={Tag}/>
         <Route path={'/Emoticon/:number'} component={Emoticon}/>
         <Route component={Home}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
