import Sw_logo from '../sw_logo/sw_logo'
import hl from './h_links.module.scss'

export default function H_links() {
    
    return <>
        <div className={hl.links_block}>
        <Sw_logo/>
        <span className={hl.active}>Рус</span>
        <span>Eng</span>
        </div>
    </>
}