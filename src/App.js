import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import About from './routes/About'
import Home from './routes/Home'
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </BrowserRouter>
  );
}

export default App;