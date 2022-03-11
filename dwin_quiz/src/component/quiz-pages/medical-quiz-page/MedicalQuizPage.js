import React, { useState } from "react"
import './MedicalQuizPage.scss'
import Medical from '../../../img/Medical.jpg'
import Timer from "../../timer/Timer"
import Medal from '../../../img/medal-1.svg'
import { useNavigate } from 'react-router';



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

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [isCorrectVal, setIsCorrectVal] = useState(0)


    const handledAnswerCheckBoxClick = (val) => {

        if (val === true) {
            setIsCorrectVal(isCorrectVal + 1)
        }

        const nextCurrent = currentQuestion + 1
        if (nextCurrent === questions.length) {
            setShowScore(true)
        }
        setCurrentQuestion(nextCurrent)
    }
    const navigate = useNavigate();

    return (

        <div className='medicalQuiz'>
            {showScore ? (
                <>
                    <div className='score-section'>
                        You scored {isCorrectVal} out of {questions.length}

                        {isCorrectVal >= 3 &&
                            <div className='medalImg'>
                                <img src={Medal} />
                                <h4>Good Job</h4>
                            </div>}

                        <button
                            className='buttonGoNewQuiz'
                            onClick={() => navigate('/selectTopic')}>
                            Go New Quiz</button>

                    </div>
                </>
            ) : (
                <>
                    <div className='title'>

                        <div>
                            <h1>Medical  Quiz</h1>
                            <h4> Read the following instructions </h4>
                        </div>
                        <div className='timer'>
                            <Timer />
                        </div>
                    </div>
                    <div className='bodyMedicalQuiz'>
                        <div className='imgQuiz'>
                            <img src={Medical} alt='imgMedicalQuiz' />
                        </div>
                        <div className='quiz'>

                            <h2>Questions {currentQuestion + 1}/{questions.length}</h2>

                            <div>
                                {questions[currentQuestion].questionsText}
                            </div>

                        </div>

                    </div>

                    <div className='answer'>
                        {questions[currentQuestion].answerOption.map((answerOption, i) =>
                            <button onClick={() => handledAnswerCheckBoxClick(answerOption.isCorrect)} key={i}>{answerOption.answerText}</button>

                        )}
                    </div>
                </>
            )}

        </div>
    )
}