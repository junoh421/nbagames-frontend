import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import PlayersContainer from './containers/players-list';
import PlayerContainer from './containers/player-show';
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import './style/app.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/players/:id' component={PlayerContainer}/>
          <Route path='/' component={PlayersContainer}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
