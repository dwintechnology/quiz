import { Route, Routes,Navigate } from 'react-router-dom';
import GeographyQuizPage from '../../geography-quiz-page/GeographyQuizPage';
import HomePage from '../../homePage/HomePage'
import SelectTopic from '../../select-topic-page/SelectTopicPage';
import './Body.scss'

export default function Body() {
    return (
        <div className='body'>
            
            <Routes>
                <Route path='/' element={<Navigate to ='home'/>}/>
                <Route path='/home' element={<HomePage/>} />
                <Route path='/selectTopic' element={<SelectTopic/>} />
                <Route path='/selectTopic/geography' element={<GeographyQuizPage/>} />
                {/* <Route path='/*' element={} */}
            </Routes>
        </div>

    )
}