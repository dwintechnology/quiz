import Achievements from './achievements/Achievements'
import FeaturedCategory from './featuredCategory/FeaturedCategory'
import './UserAchievementsAndFeaturedCategory.scss'

export default function UserAchievementsAndFeaturedCategory() {
    return (
        <div className='userAchievementsAndFeaturedCategory'>
            <Achievements/>
            <FeaturedCategory/>
        </div >
    )
}