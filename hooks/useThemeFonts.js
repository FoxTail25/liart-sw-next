import { useEffect, useState } from "react"
import localTheme from "./themeToLocalstor"


export default function useThemeFonts() {

    const [themeFonts, setThemeFonts] = useState(localTheme.getTheme('fontSize') || 'origin')

    useEffect(() => {
        if (themeFonts === 'origin') {
            document.documentElement.removeAttribute('data-font_size')
            localTheme.setTheme(themeFonts)
        } else {
            document.documentElement.setAttribute('data-font_size', themeFonts)
            localTheme.setTheme(themeFonts)
        }

    }, [themeFonts])



    return [themeFonts, setThemeFonts]
}

