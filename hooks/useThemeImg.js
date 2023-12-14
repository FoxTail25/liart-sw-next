import { useEffect, useState } from "react";
import localTheme from '../utils/themeToLocalstor'

export default function useThemeImg() {


    let [themeImg, setThemeImg] = useState(localTheme.getTheme('Img') || 'origin')

    useEffect(() => {

        if (themeImg === 'origin') {
            document.documentElement.removeAttribute('data-image')
            localTheme.setTheme(themeImg, 'Img')

        } else {
            document.documentElement.setAttribute('data-image', themeImg)
            localTheme.setTheme(themeImg, 'Img')
        }
        
        // document.body.style.display = 'block';

    }, [themeImg])

    return [themeImg, setThemeImg]
}