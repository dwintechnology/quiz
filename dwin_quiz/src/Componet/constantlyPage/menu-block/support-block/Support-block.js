import './Support-block.scss'
import { ReactComponent as Img } from '../../../../img/Support.svg'

export default function SupportBlock() {
    return (
        <div className='supportBlock'>
            <button style={{ cursor: 'pointer', }}>
                <Img className='imgSupportBlock' />
                Support
            </button>
        </div>
    )
}