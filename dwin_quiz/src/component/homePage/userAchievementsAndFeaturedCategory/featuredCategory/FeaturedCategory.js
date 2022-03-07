import './FeaturedCategory.scss'
import History from '../../../../img/History.jpg'
import Agriculture from '../../../../img/Agriculture.jpg'
import Medical from '../../../../img/Medical.jpg'
import Technology from '../../../../img/Technology.jpg'

export default function FeaturedCategory(){
    return(
        <div className='userFeaturedCategory'>
                <div className='title'>
                FeaturedCategory
                <button style={{ cursor: "pointer" }}> View All </button>
                </div>
                

                <div className='featuredCategoryBody'>

                    <div className='HistoryBlock'>
                        <img src={History} alt='History' />
                        <h4 className='History'>History</h4>
                    </div>
                    <div className='AgricultureBlock'>
                        <img src={Agriculture} alt='Agriculture' />
                        <h4 className='Agriculture'>Agriculture</h4>
                    </div>
                    <div className='MedicalBlock'>
                        <img src={Medical} alt='Medical' />
                        <h4 className='Medical'>Medical</h4>
                    </div>
                    <div className='TechnologyBlock'>
                        <img src={Technology} alt='Technology' />
                        <h4 className='Technology'>Technology</h4>
                    </div>

                </div>
            </div>
    )
}