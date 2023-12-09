import Head from 'next/head'
import '../style/global.css'
import { useContext, useState } from 'react'
import myContext from '../store/myContext'

export default function App({ Component, pagePrors }) {

    let [sw_menu_vision, setSw_menu_vision] = useState(false)

    let context = useContext(myContext)

    const contextSWandLANG = {
        lang : 'ru',
        sw_menu: {
            sw_menu_vision,
            setSw_menu_vision
        }
    }

    return<>
        <Head >
        <title>Российская государственная библиотека искусств</title>
        </Head>
        <myContext.Provider value={contextSWandLANG}>
            <Component {...pagePrors} />
        </myContext.Provider>
    </>

}