import React from 'react';
import { Route, Routes } from 'react-router';
import './App.scss';
import ConstantlyPage from './component/constantly-page/ConstantlyPage';
import LOgin from './LOgin';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/*' element={<ConstantlyPage />} />
        <Route path='/logIn' element={<LOgin />} />
        
      </Routes>
    </div>
  );
}

export default App;
