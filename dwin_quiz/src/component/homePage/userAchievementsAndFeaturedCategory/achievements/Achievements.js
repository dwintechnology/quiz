import './Achievements.scss'
import medal1 from '../../../../img/medal-1.svg'
import medal2 from '../../../../img/medal-2.svg'
import medal3 from '../../../../img/medal-3.svg'
import medal4 from '../../../../img/medal-4.svg'


export default function Achievements() {
    return (
        <div className='userAchievements'>
            Achievements
            <div className='achievementsBody'>
                <div>
                    <img src={medal1} alt='medal1' />
                    <h6>Best Time</h6>
                </div>
                <div>
                    <img src={medal2} alt='medal2' />
                    <h5>5 Win</h5>
                </div>
                <div>
                    <img src={medal3} alt='medal3' />
                    <h6>Best Result</h6>
                </div>
                <div>
                    <img src={medal4} alt='medal4' />
                    <h5>1 Win</h5>
                </div>

            </div>
        </div>
    )
}