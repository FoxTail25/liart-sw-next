import useTemplateLinkPage from '../../hooks/templateLinkPage/useTemplateLinkPage'
import Layout from '../../components/layout'

const dataPage = [
    {
        name: 'Основной фонд',
        link: '/funds/fund_name/12'
    },
    {
        name: 'Справочно-информационный фонд',
        link: '/funds/fund_name/58'
    },
    {
        name: 'Фонд изобразительных материалов',
        link: '/funds/fund_name/61'
    },
    {
        name: 'Фонд отдела Абонемента',
        link: '/funds/fund_name/62'
    },
    {
        name: 'Фонд газетных вырезок и театральных программ',
        link: '/funds/fund_name/59'
    },
    {
        name: 'Видеофонд',
        link: '/funds/fund_name/60'
    },
    {
        name: 'Фонд изданий на микрофишах',
        link: '/funds/fund_name/63'
    },
    {
        name: 'Архивный фонд',
        link: '/funds/fund_name/1790'
    },
]

export default function FundsPage() {
    const linkPage = useTemplateLinkPage(dataPage, 'Фонды', 'Фонды')

    return <>
        {linkPage.getRendiring()}
    </>
}