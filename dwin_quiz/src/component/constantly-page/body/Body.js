import { Route, Routes,Navigate } from 'react-router-dom';
import AgricultureQuizInformationPage from '../../agriculture-quiz-information-page/AgricultureQuizInformationPage';
import FootballQuizInformationPage from '../../football-quiz-information-page/FootballQuizInformationPage';
import HistoryQuizInformationPage from '../../history-quiz-information-page/HistoryQuizInformationPage';
import HomePage from '../../homePage/HomePage'
import SelectTopic from '../../select-topic-page/SelectTopicPage';
import TechnologyQuizInformationPage from '../../technology-quiz-information-page/TechnologyQuizInformationPage';
import './Body.scss'

export default function Body() {
    return (
        <div className='body'>
            
            <Routes>
                <Route path='/' element={<Navigate to ='home'/>}/>
                <Route path='/home' element={<HomePage/>} />
                <Route path='/selectTopic' element={<SelectTopic/>} />
                <Route path='/selectTopic/agriculture' element={<AgricultureQuizInformationPage/>} />
                <Route path='/selectTopic/history' element={<HistoryQuizInformationPage/>} />
                <Route path='/selectTopic/technology' element={<TechnologyQuizInformationPage/>} />
                <Route path='/selectTopic/Football' element={<FootballQuizInformationPage/>} />
                {/* <Route path='/*' element={} */}
            </Routes>
        </div>

    )
}