import React from 'react';
import logo from './logo.svg';
import './App.css';

import{BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import Header from "./Page/Header";
import Footer from "./Page/Footer";
import Catalog from "./Components/Catalog";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import MainPage from "./Components/MainPage";
import NotFound from "./Components/NotFound";
import Item from "./Components/item";

function App() {

  return (
      <Router>
        <div>
          <nav>
          </nav>
          <Header />
            <div className="page">
              <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path='/catalog' exact component={Catalog} />
                <Route path="/catalog/:id" component={Item} />
              <Route path="/about" component={About} />
              <Route path="/contacts" component={Contacts} />
              <Route path="*" component={NotFound}/>
              </Switch>
            </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
