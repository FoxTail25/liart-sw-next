class ThemeToLoacalStore {

    setTheme(theme, name = 'fontSize') {

        let themInLocal = this.getTheme()

        if (themInLocal) {
            theme = { ...themInLocal, [name]: theme }
        } else {
            theme = { [name]: theme }
        }

        theme = JSON.stringify(theme)
        localStorage.setItem('sw_theme', theme)
    }
    getTheme(name) {
        try {
            let theme = localStorage.getItem('sw_theme')
            theme = JSON.parse(theme)
            return name
                ? theme[name]
                : theme
        } catch (err) {
            return null
        }
    }
}

let localTheme = new ThemeToLoacalStore()

export default localTheme