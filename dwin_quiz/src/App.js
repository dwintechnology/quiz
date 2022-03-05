import { Route, Routes } from 'react-router';
import './App.scss';
import ConstantlyPage from './component/constantly-page/Component';
import LOgin from './LOgin';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/*' element={<ConstantlyPage />}/>
        <Route path='/logIn' element= {<LOgin/>}/>
      </Routes>
    </div>
  );
}

export default App;
