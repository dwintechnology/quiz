import React from "react"
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { ReactComponent as Img } from '../../../../img/LogOut.svg'
import './LogOut-block.scss'
export default function LogOut() {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/logIn', { replace: true }), [navigate]);
    return (
        <div className='logOut'>
            <button style={{ cursor: 'pointer', }}
                onClick={handleOnClick}>
                <Img className='imgLogOut' />
                <div>Log Out</div>
            </button>

        </div>
    )
}