import useTemplateLinkPage from '../../hooks/templateLinkPage/useTemplateLinkPage'
import Layout from '../../components/layout'


const dataPage = [
    {
        name: 'Базы данных',
        link: '/electronic_resources/database'
    },
    {
        name: 'Электронный каталог',
        link: 'http://opac.liart.ru/opacg/nog.htm'
    },
]

export default function electronic_resources() {
    const templatePage = useTemplateLinkPage(dataPage, 'Электронные ресурсы', 'Электронные ресурсы')
    return <>
        {templatePage.getRendiring()}
    </>
}