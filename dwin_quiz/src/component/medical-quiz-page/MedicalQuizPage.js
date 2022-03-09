import React from 'react'
import './MedicalQuizPage.scss'
import Medical from '../../img/Medical.jpg'

export default function MedicalQuizPage() {

    return (
        <div className='MedicalQuizBlock'>
            <div className='MedicalQuizBlockTitle'>
                <h1>Medical  Quiz</h1>
                <h4> Read the following instructions </h4>
            </div>
            <div className='imgAndInformationMedicalQuiz'>
                <img src={Medical} alt='medicalImg' />
                <div className='informationMedicalQuiz'>
                    <div className='title'>
                        <h3>Date:</h3>
                        <h3>Time Limit:</h3>
                        <h3>Attempts:</h3>
                        <h3>Points:</h3>

                    </div>
                    <div className='answer'>
                        <h4>02/02/22</h4>
                        <h4>20 min</h4>
                        <h4>Once</h4>
                        <h4>300 points</h4>
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