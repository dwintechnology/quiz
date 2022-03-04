import DashBoardBlock from './dash-board/DashBoard-block'
import LogOut from './log-out-block/LogOut-block'
import './Menu-block.scss'
import NotificationBlock from './notification-block/Notification-block'
import SupportBlock from './support-block/Support-block'

export default function MenuBlock(){
    return(
        <div className='menuBlock'>
            <div>
            <DashBoardBlock/>
            <SupportBlock/>
            <NotificationBlock/>
            </div>
            <LogOut/>
        </div>
    )
}