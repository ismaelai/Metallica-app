import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// pages
import Home from '../pages/home.js';
import Collection from '../pages/collection.js';
import Playlist from '../pages/playlist.js';
import ErrorPage from '../pages/error.js';

// UI components
import Footer from './footer.js';
import Header from '../components/header.js';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          {/*  <Route path="/collection/new" component={NewStudent} />
          <Route path="/collection/:id/edit" component={EditStudent} />
          <Route path="/collection/:id" component={ShowStudent} /> */}
          <Route path="/collection" component={Collection} />
          <Route path="/playlist" component={Playlist} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
