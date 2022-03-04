import {ReactComponent as Img} from '../../../../img/LogOut.svg'
import './LogOut-block.scss'
export default function LogOut() {
    return(
        <div className='logOut'>
            <button style={{cursor:'pointer',}}>
                <Img className='imgLogOut'/>
                <div>Log Out</div>
            </button>

        </div>
    )
}