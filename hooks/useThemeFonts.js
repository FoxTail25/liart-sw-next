import { useEffect, useState } from "react"


export default function useThemeFonts() {

    const [themeFonts, setThemeFonts] = useState(localTheme.getTheme() || 'origin')

    useEffect(() => {
        if(themeFonts === 'origin') {
            document.documentElement.removeAttribute('data-font_size')
            localTheme.setTheme(themeFonts)
        } else {
            document.documentElement.setAttribute('data-font_size', themeFonts)
            localTheme.setTheme(themeFonts)
        }

    },[themeFonts])



    return [themeFonts, setThemeFonts]
}

class ThemeToLoacalStore {

    setTheme(theme) {
        theme = JSON.stringify(theme)
        localStorage.setItem('sw_fontSize', theme)
    }
    getTheme() {
        try {
            const theme = localStorage.getItem('sw_fontSize')
            return JSON.parse(theme)
        } catch(err) {
            return null
        }
    }
}

let localTheme = new ThemeToLoacalStore()

