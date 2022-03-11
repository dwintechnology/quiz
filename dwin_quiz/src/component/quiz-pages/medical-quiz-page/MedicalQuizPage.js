import React from 'react'
import Quiz from '../Quiz'
import './MedicalQuizPage.scss'
import MedicalImg from '../../../img/Medical.jpg'


export default function MedicalQuiz() {
    const questions = [
        {
            questionsText: 'Что является активным компонентом перцового аэрозоля?',
            answerOption: [
                { answerText: 'аммиак', isCorrect: false },
                { answerText: 'муравьиная кислота', isCorrect: false },
                { answerText: 'пиперин', isCorrect: false },
                { answerText: 'капсаицин', isCorrect: true },
            ]
        },
        {
            questionsText: 'Кто чаще всего страдает дальтонизмом?',
            answerOption: [
                { answerText: 'Мужчины', isCorrect: true },
                { answerText: 'Женщины', isCorrect: false },
                { answerText: 'Моряки', isCorrect: false },
                { answerText: 'Все с одинаковой вероятностью', isCorrect: false },
            ]
        },
        {
            questionsText: 'Какое из следующего является самым маленьким?',
            answerOption: [
                { answerText: 'бактерии', isCorrect: false },
                { answerText: 'простейшие одноклеточные организмы', isCorrect: false },
                { answerText: 'лейкоциты', isCorrect: false },
                { answerText: 'вирусы', isCorrect: true },
            ]
        },
        {
            questionsText: 'Европейцы привезли в Америку много болезней. А какую болезнь привезли из Америки в Европу?',
            answerOption: [
                { answerText: 'туберкулез', isCorrect: false },
                { answerText: 'сифилис', isCorrect: true },
                { answerText: 'оспу', isCorrect: false },
                { answerText: 'тиф', isCorrect: false },

            ]
        }, {
            questionsText: 'Какова нормальная температура тела человека в градусах Цельсия?',
            answerOption: [
                { answerText: '35.6', isCorrect: false },
                { answerText: '38.0', isCorrect: false },
                { answerText: '36.6', isCorrect: true },
                { answerText: '37.1', isCorrect: false },
            ]
        },
    ]

    
    return (

        <div className='medicalQuiz'>
           <Quiz title ={'Medical Quiz'} questions = {questions} img = {MedicalImg} /> 
        </div>
    )
}