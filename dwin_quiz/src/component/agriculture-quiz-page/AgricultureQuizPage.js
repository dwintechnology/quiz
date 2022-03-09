import React from 'react'
import './AgricultureQuizPage.scss'
import Agriculture from '../../img/Agriculture.jpg'

export default function AgricultureQuizPage() {

    return (
        <div className='agricultureQuizBlock'>
            <div className='agricultureQuizBlockTitle'>
                <h1>Agriculture  Quiz</h1>
                <h4> Read the following instructions </h4>
            </div>
            <div className='imgAndInformationAgricultureQuiz'>
                <img src={Agriculture} alt='agricultureImg' />
                <div className='informationAgricultureQuiz'>
                    <div className='title'>
                        <h3>Date:</h3>
                        <h3>Time Limit:</h3>
                        <h3>Attempts:</h3>
                        <h3>Points:</h3>

                    </div>
                    <div className='answer'>
                        <h4>25/05/19</h4>
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
                <button className='startButton'>Start</button>
            </div>

        </div>

    )
}