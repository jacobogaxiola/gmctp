import React from 'react';
import './App.css';
import ChangePassword from './components/changepassword';
import RecoveryPassword from './components/recoverypassword';
import Login from './components/login';
import UserList from './components/userlist';
import UserForm from './components/userform';

function App() {

  return (
    <div className="App">
      <ChangePassword />
      <RecoveryPassword />
      <Login />
      <UserList />
      <UserForm />
    </div>
  );
}

export default App;