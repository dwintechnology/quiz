import React from "react"
import './HomePage.scss'
import UserInformation from './user-information/UserInformation'
import UserAchievementsAndFeaturedCategory from './userAchievementsAndFeaturedCategory/UserAchievementsAndFeaturedCategory'

export default function HomePage() {
    return (
        <div className='homePage'>
            <UserInformation />
            <UserAchievementsAndFeaturedCategory />
        </div>
    )
}