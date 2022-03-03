import DashBoardBlock from './dashBoard/DashBoard-block'
import LogOut from './logOut-block/LogOut-block'
import './Menu-block.scss'
import NatificationBlock from './notification-block/Notification-block'
import SupportBlock from './support-block/Support-block'

export default function MenuBlock(){
    return(
        <div className='menuBlock'>
            <div>
            <DashBoardBlock/>
            <SupportBlock/>
            <NatificationBlock/>
            </div>
            <LogOut/>
        </div>
    )
}