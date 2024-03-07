import React from 'react';
import './App.css';
import ChangePassword from './components/changepassword';
import RecoveryPassword from './components/recoverypassword';
import Login from './components/login';
import UserList from './components/userlist';
import DataGridDemo from './components/userlist';

function App() {

  return (
    <div className="App">
      <ChangePassword />
      <RecoveryPassword />
      <Login />
      <UserList />
      <DataGridDemo />
    </div>
  );
}

export default App;