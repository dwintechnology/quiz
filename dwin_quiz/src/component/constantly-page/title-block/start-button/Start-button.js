import './Start-button.scss';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';

export default function StartButton(){
const navigate= useNavigate()
    return (
        <button className="startButton"
            onClick={useCallback(() => navigate('/selectTopic'), [navigate])}   
        >Start Quiz</button>
    )
}