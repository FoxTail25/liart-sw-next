import { useEffect, useState } from "react"


export default function useThemeLs() {

    const [themeLetterSpasing, setThemeLetterSpasing] = useState(localTheme.getTheme() || 'origin')

    useEffect(() => {
        if(themeLetterSpasing === 'origin') {
            document.documentElement.removeAttribute('data-letter_spasing')
            localTheme.setTheme(themeLetterSpasing)
        } else {
            document.documentElement.setAttribute('data-letter_spasing', themeLetterSpasing)
            localTheme.setTheme(themeLetterSpasing)
        }

    },[themeLetterSpasing])

    return [themeLetterSpasing, setThemeLetterSpasing]
}

class ThemeToLoacalStore {

    setTheme(theme) {
        theme = JSON.stringify(theme)
        localStorage.setItem('sw_ls', theme)
    }
    getTheme() {
        try {
            const theme = localStorage.getItem('sw_ls')
            return JSON.parse(theme)
        } catch(err) {
            return null
        }
    }
}

let localTheme = new ThemeToLoacalStore()