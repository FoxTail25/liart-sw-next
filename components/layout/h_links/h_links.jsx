import { useRef, useState } from 'react'
import Sw_logo from '../sw_logo/sw_logo'
import hl from './h_links.module.scss'

export default function H_links() {

    let [lang, setLang] = useState('ru')

    const ru = useRef()
    const en = useRef()

    function changeLanguage(even) {
        const language = even.target.textContent
        language === 'Рус'
            ? setLang('ru')
            : setLang('en');
        console.log(lang)
    }

    return <>
        <div className={hl.links_block}>

            <div className={hl.block1}>
                <Sw_logo />
                <span className={lang === 'ru' ? hl.active : ''} ref={ru} onClick={(even) => changeLanguage(even)}>Рус</span>
                <span className={lang === 'en' ? hl.active : ''} ref={en} onClick={(even) => changeLanguage(even)}>Eng</span>
            </div>

            <div className={hl.block2}>

                <a className={hl.vk} href='https://vk.com/artlibrary' target='_blank'>
                    <div>
                        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" alt="vk">
                            <g data-name="32-vk" id="_32-vk">
                                <rect height="64" rx="11.2" ry="11.2" width="64" fill="var(--icon-vk-bg)" />
                                <path d="M9.62,19.77H17.3a.79.79,0,0,1,.74.51c.85,2.19,4.38,10.76,7.61,11.46,2.4,0,1.55-11.4-1.5-11.4-.8,0,1.42-1.42,1.57-1.48a16.38,16.38,0,0,1,8.66,0c1.53.64,1.79,2.43,1.83,3.95s-1.7,8,.59,8.7c3,.92,6.86-8.49,7.76-10.8a.79.79,0,0,1,.74-.5h8.55a.8.8,0,0,1,.74,1.11,74.74,74.74,0,0,1-6.31,11.52,1.59,1.59,0,0,0,.16,2C51,37.58,58,45.34,54,45.34H45.37a1.57,1.57,0,0,1-1.18-.53c-1.34-1.48-5.24-5.6-7-5.27-1.46.27-1.6,2.75-1.53,4.37a1.6,1.6,0,0,1-1.48,1.68c-1.53.09-3.62.13-3.81.12-6.1-.39-9.71-4.46-13.16-9A56.33,56.33,0,0,1,8.86,20.83.81.81,0,0,1,9.62,19.77Z" fill="var(--icon-vk-color)" />
                            </g>
                        </svg>
                    </div>vk
                </a>
                <a className={hl.rutube} href="https://rutube.ru/channel/24617269" target='_blank'>
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="1.328 0.964 397.97900000000016 93.429" fill="var(--icon-vk-color)" alt="rutube">
                            {/* <rect class="cls-1" height="134" rx="11.2" ry="11.2" width="564" fill="var(--icon-vk-bg)" /> */}
                            <path d="M180.599 23.934V1.315L159.32 4.073v19.861h-8.281V42.65h8.281v51.009h21.279V42.65h15.427V23.934zM64.304 57.505c6.482-5.229 10.642-12.383 10.642-21.363v-3.906c0-15.769-12.782-27.355-28.543-27.355L1.328 4.706l.027 88.484 21.29.168V63.325h21.883l14.265 30.033H83.71zM53.191 35.069c0 6.279-5.092 9.843-11.371 9.843H22.646V23.663H41.82c6.279 0 11.371 4.411 11.371 10.692zM303.484 23.564h-11.266V.964l-20.817 2.757-.005 89.637h32.088c15.768 0 28.545-12.104 28.545-27.866V52.109c0-15.764-12.777-28.545-28.545-28.545zm8.147 40.137c0 6.639-4.48 10.578-11.116 10.578h-8.228V42.657h8.228c6.636 0 11.116 3.943 11.116 10.581zM241.53 23.934V64.2c0 6.636-2.413 11.122-9.053 11.122h-.329c-6.634 0-9.054-4.486-9.054-11.122V23.934h-21.003v41.803c0 15.766 6.9 28.549 27.868 28.549h4.028c22.084 0 28.551-12.783 28.551-28.549V23.934zM123.148 23.934V64.2c0 6.636-2.416 11.122-9.054 11.122h-.329c-6.634 0-9.052-4.486-9.052-11.122V23.934H83.71v41.803c0 15.766 6.896 28.549 27.864 28.549h4.031c22.079 0 28.548-12.783 28.548-28.549V23.934zM385.309 69.982s-6.145 7.53-16.948 6.686c-6.731-.524-10.722-3.944-10.722-10.58v-2.313h41.203V51.826c0-15.375-11.266-28.862-30.429-28.862-19.157 0-30.45 12.809-30.45 28.185v14.373c0 15.385 11.269 28.871 30.429 28.871 21.657 0 30.915-15.104 30.915-15.104zm-27.67-22.091c0-6.48 4.131-10.381 10.28-10.561h.531c6.4 0 10.721 3.942 10.721 10.577v.586h-21.532z" /></svg>
                    </div>rutube

                </a>
                <a className={hl.wifi} href="https://liart.ru/ru/pages/wi_fi_info/" target='_blank'>
                    <div>
                    <svg fill="var(--icon-rutube-bg)" width="32px" height="32px" viewBox="0 -32 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M198.751 31.302C181.263 12.072 156.041 0 128 0 99.959 0 74.737 12.072 57.249 31.302H198.75zM57.25 159.91c17.488 19.23 42.71 31.302 70.751 31.302 28.041 0 53.263-12.072 70.751-31.302H57.25zM42.464 39.431C19.012 39.431 0 58.443 0 81.896v27.42c0 23.452 19.012 42.464 42.464 42.464h171.072c23.452 0 42.464-19.012 42.464-42.464v-27.42c0-23.453-19.012-42.465-42.464-42.465H42.464zm209.168 41.98c0-20.773-16.839-37.612-37.611-37.612h-42.465c-20.772 0-37.611 16.839-37.611 37.611v28.512c0 20.773-16.839 37.612-37.611 37.612H214.02c20.772 0 37.611-16.84 37.611-37.612V81.41zM104.1 83.957v40.16h12.132v-40.16H104.1zm-1.214-12.678a7.219 7.219 0 1 0 14.438 0 7.219 7.219 0 0 0-14.438 0zM21.96 65.517l15.651 58.6h10.07l11.77-40.523 11.768 40.524h10.434l15.409-58.601h-11.77l-8.977 38.582-11.162-38.582H54.355l-11.163 37.611L34.7 65.517H21.96zm131.276 0v58.6h12.86v-22.93h29.12v-11.89h-29.12v-11.89h31.06v-11.89h-43.92zm52.656 18.441v40.16h12.133v-40.16h-12.133zm-1.092-12.8a7.219 7.219 0 1 0 14.438 0 7.219 7.219 0 0 0-14.438 0z"/></svg>

                    </div>wifi
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