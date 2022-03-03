import './Notification-block.scss'
import { ReactComponent as Img } from '../../../../img/Notification.svg'

export default function NatificationBlock(){
    return (
        <div className='natificationBlock'>
            <button style={{cursor:'pointer',}}> <Img className='imgnatificationBlock'/>Natification</button>
        </div>
    )
}