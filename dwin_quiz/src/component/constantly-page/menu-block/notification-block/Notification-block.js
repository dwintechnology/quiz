import './Notification-block.scss'
import { ReactComponent as Img } from '../../../../img/Notification.svg'

export default function NotificationBlock(){
    return (
        <div className='notificationBlock'>
            <button style={{cursor:'pointer',}}> <Img className='imgnatificationBlock'/>Notification</button>
        </div>
    )
}