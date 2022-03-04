import './DashBoard-block.scss'
import {ReactComponent as Img} from '../../../../img/DashBoard.svg'
export default function DashBoardBlock(){

    return (
        <div className='dashBoardBlock'>
            <button style={{cursor:'pointer',}} > <Img className='imgDashBoard'/>DashBoard</button>
        </div>
    )
}