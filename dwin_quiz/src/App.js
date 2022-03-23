import Login from './login/Login';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import './App.scss';
import ConstantlyPage from './component/constantly-page/ConstantlyPage';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Navigate to='logIn' />} />
        <Route path='/logIn' element={<Login />} />
        <Route path='/*' element={<ConstantlyPage />} />
      </Routes>
    </div>
  );
}

export default App;
