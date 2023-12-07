import { useEffect, useState } from "react"
import localTheme from "./themeToLocalstor"


export default function useThemeLs() {

    const [themeLetterSpasing, setThemeLetterSpasing] = useState(localTheme.getTheme('letterSpace') || 'origin')

    useEffect(() => {
        if(themeLetterSpasing === 'origin') {
            document.documentElement.removeAttribute('data-letter_spasing')
            localTheme.setTheme(themeLetterSpasing, 'letterSpace')
        } else {
            document.documentElement.setAttribute('data-letter_spasing', themeLetterSpasing)
            localTheme.setTheme(themeLetterSpasing, 'letterSpace')
        }

    },[themeLetterSpasing])

    return [themeLetterSpasing, setThemeLetterSpasing]
}
