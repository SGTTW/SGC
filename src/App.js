import React from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
      
      <Home />
      <NavBar />
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
