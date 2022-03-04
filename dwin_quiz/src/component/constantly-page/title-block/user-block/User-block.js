import React from 'react'
import image from '../../../../img/UserIcon.svg'
import './User-block.scss'

export default function UserBlock(){
    return(
        <div className="userBlock">
            <img src={image} alt='img'/>
            <h3>User Name</h3>
        </div>

    )
}