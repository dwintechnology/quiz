import './SelectTopicPage.scss'
import History from '../../img/History.jpg'
import Agriculture from '../../img/Agriculture.jpg'
import Medical from '../../img/Medical.jpg'
import Technology from '../../img/Technology.jpg'
import Geography from '../../img/Geography.jpg'
import Football from '../../img/Football.jpg'
import { useNavigate } from 'react-router';
import { useCallback } from 'react';

export default function SelectTopic() {
    const navigate = useNavigate();

    return (
        <div className='selectTopicBlock'>
            <div className='selectTopicBlockTitle'>
                <h2 >Select Topic</h2>
                <h4>Featured Category</h4>
            </div>

            <div className='selectTopicBlockTitleBody'>
                <div className='medicalBlock'>
                    <img src={Medical} alt='medical' className='medicalImg' 
                    
                    onClick={useCallback(() => navigate('/selectTopic/medical'), [navigate])}/>
                    <h5>Medical</h5>
                </div>
                <div className='geographyBlock'>
                    <img src={Geography} alt='geography' className='GeographyImg'
                    onClick={useCallback(() => navigate('/selectTopic/geography'), [navigate])} />
                    <h5 className='whiteH5'>Geography</h5>
                </div>
                <div className='agricultureBlock'>
                    <img src={Agriculture} alt='agriculture' className='agricultureImg'
                    onClick={useCallback(() => navigate('/selectTopic/agriculture'), [navigate])} />
                    <h5 >Agriculture</h5>
                </div>
                             
                <div className='historyBlock'>
                    <img src={History} alt='history' className='historyImg' 
                    onClick={useCallback(() => navigate('/selectTopic/history'), [navigate])}/>
                    <h5>History</h5>
                </div>
                <div className='technologyBlock'>
                    <img src={Technology} alt='technology' className='technologyImg' 
                    onClick={useCallback(() => navigate('/selectTopic/technology'), [navigate])}/>
                    <h5 className='whiteH5'>Technology</h5>
                </div>   
               
                <div className='footballBlock'>
                    <img src={Football} alt='football' className='FootballImg' 
                    onClick={useCallback(() => navigate('/selectTopic/football'), [navigate])}/>
                    <h5>Football</h5>
                </div>
            </div>
        </div>
    )
}

