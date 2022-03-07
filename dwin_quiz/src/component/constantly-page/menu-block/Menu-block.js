import LogOut from './log-out-block/LogOut-block'
import './Menu-block.scss'
import { ReactComponent as ImgDashBoard } from '../../../img/DashBoard.svg'
import { ReactComponent as ImgSupport } from '../../../img/Support.svg'
import { ReactComponent as ImgNotification } from '../../../img/Notification.svg'
import { useNavigate } from 'react-router';
import { useCallback } from 'react';

export default function MenuBlock() {
    const navigate = useNavigate();
     return (
        <div className='menuBlock'>
            <div>
                <div className='dashBoardBlock'>
                    <button
                        onClick={useCallback(() => navigate('/home'), [navigate])}>
                        <ImgDashBoard className='imgDashBoard' />
                        DashBoard
                    </button>
                </div>
                <div className='supportBlock'>
                    <button 
                        onClick={useCallback(() => navigate('/support'), [navigate])} >
                        <ImgSupport className='imgSupportBlock' />
                        <div>Support</div>
                    </button>

                </div>
                <div className='notificationBlock'>
                    <button
                        onClick={useCallback(() => navigate('/notification'), [navigate])}
                    > <ImgNotification className='identificationBlock' />Notification</button>
                </div>
            </div>
            <LogOut />
        </div>
    )
}