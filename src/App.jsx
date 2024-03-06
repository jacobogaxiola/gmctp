import React from 'react';
import './App.css';
import ChangePassword from './components/changepassword';
import RecoveryPassword from './components/recoverypassword';
import Login from './components/login';

function App() {

  return (
    <div className="App">
      <ChangePassword />
      <RecoveryPassword />
      <Login />
    </div>
  );
}

export default App;