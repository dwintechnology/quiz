import React from "react"
import { Route, Routes,Navigate } from 'react-router-dom';
import AgricultureQuizInformationPage from '../../agriculture-quiz-information-page/AgricultureQuizInformationPage';
import FootballQuizInformationPage from '../../football-quiz-information-page/FootballQuizInformationPage';
import HistoryQuizInformationPage from '../../history-quiz-information-page/HistoryQuizInformationPage';
import GeographyQuizInformationPage from '../../geography-quiz-information-page/GeographyQuizInformationPage';
import HomePage from '../../home-page/HomePage'
import MedicalQuizInformationPage from '../../medical-quiz-information-page/MedicalQuizInformationPage';
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
                <Route path='/selectTopic/medical' element={<MedicalQuizInformationPage />} />
                <Route path='/selectTopic/geography' element={<GeographyQuizInformationPage/>} />
                {/* <Route path='/*' element={} */}
            </Routes>
        </div>

    )
}
