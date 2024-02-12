

import Head from 'next/head'
import '../style/global.css'
import { useContext, useEffect, useState, useLayoutEffect } from 'react'
import myContext from '../store/myContext'
import localTheme from '../utils/themeToLocalstor'
import Layout from "../components/layout"

export default function App({ Component, pagePrors }) {

    useEffect(()=> {

        let sw_switch = localTheme.getTheme('sw_button')
        setSw_menu_visible(sw_switch || false)
    },[])

    let [sw_menu_vision, setSw_menu_visible] = useState()

    let context = useContext(myContext)

    const setSw_menu_vision =(switcher) => {
        setSw_menu_visible(switcher)
        localTheme.setTheme(switcher, 'sw_button')
    }



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
        <Layout>
            <Component {...pagePrors} />
        </Layout>
        </myContext.Provider>
    </>

}