import { useLayoutEffect, useState } from "react";

export default function useTheme() {
    let [theme, setTheme] = useState('origin')

    useLayoutEffect(()=> {
        if(theme === 'origin') {
            document.documentElement.removeAttribute('data-theme')
        } else {
            document.documentElement.setAttribute('data-theme', theme)
        }
    },[theme])

    return [theme, setTheme]
}