import { Route, Routes,Navigate } from 'react-router-dom';
import AgricultureQuizPage from '../../agriculture-quiz-page/AgricultureQuizPage';
import FootballQuizPage from '../../football-quiz-page/FootballQuizPage';
import HistoryQuizPage from '../../history-quiz-page/HistoryQuizPage';
import HomePage from '../../homePage/HomePage'
import SelectTopic from '../../select-topic-page/SelectTopicPage';
import TechnologyQuizPage from '../../technology-quiz-page/TechnologyQuizPage';
import './Body.scss'

export default function Body() {
    return (
        <div className='body'>
            
            <Routes>
                <Route path='/' element={<Navigate to ='home'/>}/>
                <Route path='/home' element={<HomePage/>} />
                <Route path='/selectTopic' element={<SelectTopic/>} />
                <Route path='/selectTopic/agriculture' element={<AgricultureQuizPage/>} />
                <Route path='/selectTopic/history' element={<HistoryQuizPage/>} />
                <Route path='/selectTopic/technology' element={<TechnologyQuizPage/>} />
                <Route path='/selectTopic/Football' element={<FootballQuizPage/>} />
                {/* <Route path='/*' element={} */}
            </Routes>
        </div>

    )
}