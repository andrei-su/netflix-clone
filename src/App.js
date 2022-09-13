import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen.js';
// Styles
import './App.css';

export default function App() {
  // const user = useSelector(selectUser);
  const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}
