import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(promise))(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      <Switch>
        <Route exact path="/" component={PostsIndex} />
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/posts/:id" component={PostsShow} />
      </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
