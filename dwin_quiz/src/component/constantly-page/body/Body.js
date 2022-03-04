import { Route, Routes } from 'react-router';
import HomePage from '../../homePage/HomePage'
import './Body.scss'

export default function Body() {
    return (
        <div className='body'>
            
            <Routes>
                <Route path='home/' element={<HomePage />} />

            </Routes>
        </div>

    )
}