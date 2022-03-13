import React from "react"
import { Route, Routes, Navigate } from 'react-router-dom';
import TopicInformationPage from '../../topic-information-pages/TopicInformationPage';
import HomePage from '../../home-page/HomePage'
import Topics from '../../select-topic-page/SelectTopicPage';
import './Body.scss'
import Quiz from '../../quiz-pages/Quiz'

export default function Body() {
    return (
        <div className='body'>

            <Routes>
                <Route path='/' element={<Navigate to='home' />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/topics' element={<Topics />} />
                <Route path='/topic/:name' element={<TopicInformationPage/>} />   
                <Route path='/quiz/:name' element={<Quiz />} />
                {/* <Route path='/*' element={}/> */}
            </Routes>
        </div>

    )
}
