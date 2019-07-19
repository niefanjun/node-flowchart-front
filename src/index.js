import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FlowPage from './Flow';
import MindPage from './Mind';
import KoniPage from './Koni';

ReactDOM.render(
  <Router basename="/page/index">
		{/*<Route path="/flow" component={FlowPage} />*/}
    <Route path="/flow/:flowId" component={FlowPage} />
    <Route path="/mind" component={MindPage} />
    <Route path="/koni" component={KoniPage} />
  </Router>,
  document.getElementById('root'),
);
