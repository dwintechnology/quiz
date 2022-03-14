import React, { useEffect, useState } from 'react';
import './TopicInformationPage.scss';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import MedicalImg from '../../img/Medical.jpg';
import GeographyImg from '../../img/Geography.jpg';
import AgricultureImg from '../../img/Agriculture.jpg';
import HistoryImg from '../../img/History.jpg';
import TechnologyImg from '../../img/Technology.jpg';
import FootballImg from '../../img/Football.jpg';


export default function TopicInformationPage() {

    let { name } = useParams()
    const navigate = useNavigate()

    const [quizName, setQuizName] = useState()
    const [quizImg, setQuizImg] = useState()
    const [navigators,setNavigators]= useState()

    useEffect(() => {
        switch (name) {
            case 'medical':
                setQuizName('Medical')
                setQuizImg(MedicalImg)
                setNavigators('/quiz/medical')
                break

            case 'geography':
                setQuizName('Geography')
                setQuizImg(GeographyImg)
                setNavigators('/quiz/geography')
                break

            case 'agriculture':
                setQuizName('Agriculture')
                setQuizImg(AgricultureImg)
                setNavigators('/quiz/agriculture')
                break

            case 'history':
                setQuizName('History')
                setQuizImg(HistoryImg)
                setNavigators('/quiz/history')
                break

            case 'technology':
                setQuizName('Technology')
                setQuizImg(TechnologyImg)
                setNavigators('/quiz/technology')
                break

            case 'football':
                setQuizName('Football')
                setQuizImg(FootballImg)
                setNavigators('/quiz/football')
                break

        }

    }, [])
    return (
        <div className='informationPage'>
            <div className='quizBlockTitle'>
                <h1>{quizName} Quiz</h1>
                <h4> Read the following instructions </h4>
            </div>
            <div className='imgAndInformationQuiz'>
                <img src={quizImg} alt='agricultureImg' />
                <div className='informationQuiz'>
                    <div className='title'>
                        <h3>Date:</h3>
                        <h3>Time Limit:</h3>
                        <h3>Attempts:</h3>
                        <h3>Points:</h3>

                    </div>
                    <div className='answer'>
                        <h4>25/05/21</h4>
                        <h4>10 min</h4>
                        <h4>Once</h4>
                        <h4>250 points</h4>
                    </div>

                </div>

            </div>
            <div className='instructions'>
                <h1>Instructions</h1>
                <div>
                    This quiz consists of 5 multiple-choice questions. To be successful with the quizzes, it’s important to conversant with the topics. Keep the following in mind:
                    Timing - You need to complete each of your attempts in one sitting, as you are allotted 30 minutes to each attempt.
                    Answers - You may review your answer-choices and compare them to the correct answers after your final attempt.
                    <p> To start, click the Start button. When finished, click the Submit  button.</ p>
                </div>
            </div>
            <div className='divStartButton'>
                <button className='startButton'
                onClick={() => navigate(`${navigators}`)}
                >Start</button>
            </div>

        </div>
    )
}
TopicInformationPage.propTypes = {
    title: PropTypes.string,
    img: PropTypes.element,

};