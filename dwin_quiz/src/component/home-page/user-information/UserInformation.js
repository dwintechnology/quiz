import React from "react"
import './UserInformation.scss'
import UserImg from '../../../img/UserImg.svg'
import Flag from '../../../img/Flag.svg'
import Time from '../../../img/Time.svg'
import CorrectAnswers from '../../../img/Ok.svg'
import BonusLine from '../../../img/userBonus.svg' 
import BonusLine1 from '../../../img/userBonus1.svg'

export default function UserInformation() {
    return (
        <div className='userInformation'>
            <img src={UserImg} alt='UserImg' className='userIcon' />

            <div className='information'>
                <h3 className=' userName'> User Name</h3>
                <h5 className='userBonus'>Bonus booster 24lv</h5>
                <div className='level'>
                <img src={BonusLine} alt='BonusLine' className='BonusLine'/>
                <img src={BonusLine1} alt='BonusLine1' className='BonusLine1'/>
                </div>
                <div className='body'>
                    <div className='flagBlock'>
                        <div className='flagImgBlock'>
                            <img src={Flag} alt='flag' className='flag' />
                        </div>
                        <div>
                            <h2>25</h2>
                            <h5>Quiz Passed</h5>
                        </div>

                    </div>
                    <div className='timeBlock'>
                        <div className='timeImgBlock'>
                            <img src={Time} alt='time' className='time' />
                        </div>
                        <div>
                            <h2>27min</h2>
                            <h5>Best Tame</h5>
                        </div>
                    </div>
                    <div className='correctAnswersBlock'>
                        <div className='correctAnswersImgBlock'>
                            <img src={CorrectAnswers} alt='correctAnswers' className='correctAnswers' />
                        </div>
                        <div>
                            <h2>140</h2>
                            <h5>Correct Answers</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}