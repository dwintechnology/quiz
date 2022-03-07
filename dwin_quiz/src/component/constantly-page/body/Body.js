import { Route, Routes,Navigate } from 'react-router-dom';
import HomePage from '../../homePage/HomePage'
import './Body.scss'

export default function Body() {
    return (
        <div className='body'>
            
            <Routes>
                <Route path='/' element={<Navigate to ='home'/>}/>
                <Route path='/home' element={<HomePage/>} />
                {/* <Route path='/*' element={} */}
            </Routes>
        </div>

    )
}