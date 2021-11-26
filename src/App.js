import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import NotFound from './Pages/NotFound';
import Post from './Pages/Post';

function App() {
  const [login, setLogin] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />


        <button onClick={() => setLogin(!login)}>{login ? "log out" : "login"}</button>

        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/profile'>
            {login ? <Profile /> : <Redirect to='/' />}
          </Route>
          <Route path='/post/:id' component={Post} />
          <Route component={NotFound} />

        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;