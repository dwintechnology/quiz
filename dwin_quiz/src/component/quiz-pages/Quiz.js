import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import './Quiz.scss'
import Timer from "../timer/Timer"
import Medal1 from '../../img/medal-1.svg'
import Medal2 from '../../img/medal-2.svg'
import { useNavigate } from 'react-router';
import MedicalImg from '../../img/Medical.jpg';
import GeographyImg from '../../img/Geography.jpg';
import AgricultureImg from '../../img/Agriculture.jpg';
import HistoryImg from '../../img/History.jpg';
import TechnologyImg from '../../img/Technology.jpg';
import FootballImg from '../../img/Football.jpg';
import questions from '../data/Data'



export default function Quiz() {

    let { name } = useParams()
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [isCorrectVal, setIsCorrectVal] = useState(0)
    const [quizTitle, setQuizTitle] = useState()
    const [quizImg, setQuizImg] = useState()
    const [dataQuestion, setDataQuestion] = useState([])

    let arrQuestions = questions.filter((el) => el.title === name)


    useEffect(() => {
        switch (name) {
            case 'medical':
                setQuizTitle('Medical')
                setQuizImg(MedicalImg)
                setDataQuestion(arrQuestions)
                break

            case 'geography':
                setQuizTitle('Geography')
                setQuizImg(GeographyImg)
                setDataQuestion(arrQuestions)
                break

            case 'agriculture':
                setQuizTitle('Agriculture')
                setQuizImg(AgricultureImg)
                setDataQuestion(arrQuestions)
                break

            case 'history':
                setQuizTitle('History')
                setQuizImg(HistoryImg)
                setDataQuestion(arrQuestions)
                break

            case 'technology':
                setQuizTitle('Technology')
                setQuizImg(TechnologyImg)
                setDataQuestion(arrQuestions)
                break

            case 'football':
                setQuizTitle('Football')
                setQuizImg(FootballImg)
                setDataQuestion(arrQuestions)
                break

        }

    }, [])



    const handledAnswerCheckBoxClick = (value) => {

        if (value === true) {
            setIsCorrectVal(isCorrectVal + 1)
        }

        const nextCurrent = currentQuestion + 1

        if (nextCurrent === dataQuestion[0]?.question.length) {
            setShowScore(true)
        }
        setCurrentQuestion(nextCurrent)
    }



    return (

        <div className='quiz'>
            {showScore ? (
                <>
                    <div className='score-section'>
                        You scored {isCorrectVal} out of {dataQuestion[0]?.question.length}

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
                            onClick={() => navigate('/topics')}>
                            Go New Quiz</button>

                    </div>
                </>
            ) : (
                <>
                    <div className='title'>

                        <div>
                            <h1>{quizTitle} Quiz</h1>
                            <h4> Read the following instructions </h4>
                        </div>
                        <div className='timer'>
                            <Timer  setShowScore={setShowScore}/>
                        </div>
                    </div>
                    <div className='bodyQuiz'>
                        <div className='imgQuiz'>
                            <img src={quizImg} alt='imgQuiz' />
                        </div>
                        <div className='question'>

                            <h2>Questions {currentQuestion + 1}/{dataQuestion[0]?.question.length}</h2>

                            <div >
                                {dataQuestion[0]?.question[currentQuestion]?.questionsText}
                            </div>

                        </div>

                    </div>

                    <div className='answer'>
                        {dataQuestion[0]?.question[currentQuestion]?.answerOption?.map((answerOption, i) =>
                            <button onClick={() => handledAnswerCheckBoxClick(answerOption?.isCorrect)} key={i}> {answerOption?.answerText} </button>

                        )}
                    </div>
                </>
            )}
        </div>
    )
}

