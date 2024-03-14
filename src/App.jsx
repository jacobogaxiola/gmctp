import React from 'react';
import './App.css';

import ChangePassword from './components/changepassword';
import RecoveryPassword from './components/recoverypassword';
import Login from './components/login';
import UserList from './components/userlist';
import UserForm from './components/userform';
import Inspections from './components/inspections';
import InspectionCapture from './components/InspectionCapture';


import { StyledEngineProvider } from '@mui/material/styles';
import Carrusel from './components/carrusel';


function App() {

  return (
    <div className="App">
      <ChangePassword />
      <RecoveryPassword />
      <Login />
      <UserList />
      <UserForm />
      <Inspections />
      <Carrusel />
      <StyledEngineProvider injectFirst>
      <InspectionCapture />
      </StyledEngineProvider>
      
    </div>
  );
}

export default App;