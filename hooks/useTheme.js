import { useEffect, useState } from "react";

export default function useTheme() {
    let [theme, setTheme] = useState(localTheme.getTheme() || 'origin')

    useEffect(()=> {
        if(theme === 'origin') {
            document.documentElement.removeAttribute('data-theme')
            localTheme.setTheme(theme)
            
        } else {
            document.documentElement.setAttribute('data-theme', theme)
            localTheme.setTheme(theme)
        }
        document.body.style.display = 'block';

    },[theme])

    return [theme, setTheme]
}

class ThemeToLoacalStore {

    setTheme(theme) {
        theme = JSON.stringify(theme)
        localStorage.setItem('sw_theme', theme)
    }
    getTheme() {
        try {
            const theme = localStorage.getItem('sw_theme')
            return JSON.parse(theme)
        } catch(err) {
            return null
        }
    }
}

let localTheme = new ThemeToLoacalStore()