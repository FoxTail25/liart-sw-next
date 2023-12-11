import { useEffect, useState } from "react";
import localTheme from '../utils/themeToLocalstor'

export default function useTheme() {


    let [theme, setTheme] = useState(localTheme.getTheme('color') || 'origin')

    useEffect(() => {
        if (theme === 'origin') {
            document.documentElement.removeAttribute('data-theme')
            localTheme.setTheme(theme, 'color')

        } else {
            document.documentElement.setAttribute('data-theme', theme)
            localTheme.setTheme(theme, 'color')
        }
        
        document.body.style.display = 'block';

    }, [theme])

    return [theme, setTheme]
}