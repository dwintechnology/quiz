import React, { useState } from "react"
import './Quiz.scss'
import Timer from "../timer/Timer"
import Medal1 from '../../img/medal-1.svg'
import Medal2 from '../../img/medal-2.svg'
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';


export default function Quiz({ title, questions, img }) {


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
        <div className='quiz'>
            {showScore ? (
                <>
                    <div className='score-section'>
                        You scored {isCorrectVal} out of {questions.length}

                        {(isCorrectVal >= 3 && isCorrectVal < 5) &&
                            <div className='medalImg'>
                                <img src={Medal1} />
                                <h4>Good Job</h4>
                            </div>}
                        {isCorrectVal < 1 &&
                            <div className='medalImg'>
                                <h4>You Fail</h4>
                            </div>}

                        {isCorrectVal === 5 &&
                            <div className='medalImg'>
                                <img src={Medal2} />
                                <h4>Perfect Job</h4>
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
                            <h1>{title}</h1>
                            <h4> Read the following instructions </h4>
                        </div>
                        <div className='timer'>
                            <Timer />
                        </div>
                    </div>
                    <div className='bodyQuiz'>
                        <div className='imgQuiz'>
                            <img src={img} alt='imgQuiz' />
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

Quiz.propTypes = {
    title: PropTypes.string,
    questions: PropTypes.arrayOf(PropTypes.object),
    img: PropTypes.element

};