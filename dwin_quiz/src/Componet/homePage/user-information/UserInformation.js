import './UserInformation.scss'
import UserImg from '../../../img/UserImg.svg'

export default function UserInformation (){
    return (
        <div className='userInformation'>
            <img src={UserImg} alt='UserImg' />

        </div>
    )
}