import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { StreamCreate, StreamDelete, StreamEdit, StreamList, StreamShow } from './streams';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
