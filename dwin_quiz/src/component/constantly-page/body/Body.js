import React from "react"
import { Route, Routes, Navigate } from 'react-router-dom';

import AgricultureQuizInformationPage from '../../topic-information-pages/agriculture-quiz-information-page/AgricultureQuizInformationPage';
import FootballQuizInformationPage from '../../topic-information-pages/football-quiz-information-page/FootballQuizInformationPage';
import HistoryQuizInformationPage from '../../topic-information-pages/history-quiz-information-page/HistoryQuizInformationPage';
import GeographyQuizInformationPage from '../../topic-information-pages/geography-quiz-information-page/GeographyQuizInformationPage';
import TechnologyQuizInformationPage from '../../topic-information-pages/technology-quiz-information-page/TechnologyQuizInformationPage';
import MedicalQuizInformationPage from '../../topic-information-pages/medical-quiz-information-page/MedicalQuizInformationPage';

import HomePage from '../../home-page/HomePage'
import SelectTopic from '../../select-topic-page/SelectTopicPage';
import './Body.scss'
import Timer from "../../timer/Timer";
import MedicalQuiz from "../../quiz-pages/medical-quiz-page/MedicalQuizPage";

export default function Body() {
    return (
        <div className='body'>

            <Routes>
                <Route path='/' element={<Navigate to='home' />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/selectTopic' element={<SelectTopic />} />
                <Route path='/selectTopic/agriculture' element={<AgricultureQuizInformationPage />} />
                <Route path='/selectTopic/history' element={<HistoryQuizInformationPage />} />
                <Route path='/selectTopic/technology' element={<TechnologyQuizInformationPage />} />
                <Route path='/selectTopic/Football' element={<FootballQuizInformationPage />} />
                <Route path='/selectTopic/medical' element={<MedicalQuizInformationPage />} />
                <Route path='/selectTopic/geography' element={<GeographyQuizInformationPage />} />
                <Route path='/support' element={<Timer />} />
                <Route path='/medicalQuiz' element={<MedicalQuiz />} />
                {/* <Route path='/*' element={}/> */}
            </Routes>
        </div>

    )
}
