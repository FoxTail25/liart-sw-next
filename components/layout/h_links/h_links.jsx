import Sw_logo from '../sw_logo/sw_logo'
import hl from './h_links.module.scss'

export default function H_links() {

    return <>
        <div className={hl.links_block}>

            <div className={hl.block1}>
                <Sw_logo />
                <span className={hl.active}>Рус</span>
                <span>Eng</span>
            </div>

            <div className={hl.block2}>

                <a className={hl.vk} href='https://vk.com/artlibrary' target='_blank'>
                    <div></div>
                </a>
                <a className={hl.rutube} href="https://rutube.ru/channel/24617269" target='_blank'>
                    <div></div>
                </a>
                <a className={hl.wifi} href="https://liart.ru/ru/pages/wi_fi_info/" target='_blank'>
                    <div></div>
                </a>
            </div>

            <div className={hl.block3}>

                <a href="http://opac.liart.ru/opacg/nog.htm" target="_blank">
                    ПОИСК В ЭЛЕКТРОННЫХ КАТАЛОГАХ РГБИ
                </a>

                <a href="http://opac.liart.ru/opacg/nog.htm" target="_blank">
                    ПРОСМОТР ЦИФРОВЫХ КОПИЙ
                </a>

                <a href="http://opac.liart.ru/opacg/zakaz.htm" target="_blank">
                    ЗАКАЗ ДОКУМЕНТА В ЧИТАЛЬНЫЙ ЗАЛ
                </a>
                
            </div>

        </div>
    </>
}