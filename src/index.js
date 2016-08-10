
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 網站 from './網站/網站';
import 查 from './頁/查/查';
import './app.css';

import Debug from 'debug';
Debug.enable('sia2:*');

const root = document.getElementById('app');
let history = browserHistory;

render(
  <Router history={history}>
          <Route path='/' component={網站 }>
              <IndexRoute component={查}/>
          //'%E8%AC%9B' == '講'
              <Route path='%E8%AC%9B(/:ku)' component={查}/>
              <Route path='%E8%AC%9B' component={查}/>
              <Route path='**/:ku' component={查}/>
          </Route>
      </Router>,
      root
);
