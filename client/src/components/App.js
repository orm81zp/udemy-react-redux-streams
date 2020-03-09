import React from 'react';
import { Router, Route } from 'react-router-dom';
import { StreamCreate, StreamDelete, StreamEdit, StreamList, StreamShow, Stream403 } from './streams';
import Header from './Header';
import history from '../history'

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <React.Fragment>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="/403" exact component={Stream403} />
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
