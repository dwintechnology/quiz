import './App.css';
import Login from './login/Login';
import React from 'react';
import { Route, Routes } from 'react-router';
import './App.scss';
import ConstantlyPage from './component/constantly-page/ConstantlyPage';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/*' element={<ConstantlyPage />} />
        <Route path='/logIn' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
