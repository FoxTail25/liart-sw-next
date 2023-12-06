import useTheme from "../../hooks/useTheme"
import sw from '../../style/layout/sw_menu.module.scss'
import Sw_button from "./sw_button"

export default function Sw_menu() {
  const [theme, setTheme] = useTheme()

  const themeArr = [
    {
      name: 'origin',
      color: '',
      bg: '',
    },
    {
      name: 'white',
      color: 'black',
      bg: 'white',
    },
    {
      name: 'black',
      color: 'white',
      bg: 'black',
    },
    {
      name: 'blue',
      color: 'rgb(6,52,98)',
      bg: 'rgb(157,209,255)',
    },
    {
      name: 'sand',
      color: 'rgb(77,75,67)',
      bg: 'rgb(247,243,214)',
    },
    {
      name: 'green',
      color: 'rgb(169, 228, 77)',
      bg: 'rgb(59, 39, 22)',
    }
  ]

  const themeBtn = () => {
    return themeArr.map(colorTheme => {
      return < Sw_button key={colorTheme.name}{...{
        colorTheme,
        setTheme
      }} />
    }
    )
  }

  return <nav className={sw.sw_menu}>
    {themeBtn()}
  </nav>
}