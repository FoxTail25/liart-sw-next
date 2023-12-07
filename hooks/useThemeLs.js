import { useEffect, useState } from "react"
import localTheme from "./themeToLocalstor"


export default function useThemeLs() {

    const [themeLetterSpasing, setThemeLetterSpasing] = useState(localTheme.getTheme('letterSpace') || 'origin')

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
