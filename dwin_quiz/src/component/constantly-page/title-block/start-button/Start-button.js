import React from "react"
import './Start-button.scss';
import { useNavigate } from 'react-router';


export default function StartButton() {
    const navigate = useNavigate()
    return (
        <button className="startButton"
            onClick={() =>navigate('/topics')}
        >Start Quiz</button>
    )
}