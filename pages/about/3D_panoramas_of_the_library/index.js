import useTemplateLinkPage from '../../../hooks/templateLinkPage/useTemplateLinkPage'
// import Layout from '../../../components/layout'


const dataPage = [
    {
        name: 'Общий вид 1го этажа библиотеки - для читателей',
        link: 'http://red3d.liart.ru/show/32'
    },
    {
        name: 'Посмотреть трехмерную панораму общего читального зала (зала № 2)',
        link: 'http://red3d.liart.ru/show/33'
    },
    {
        name: 'Посмотреть трехмерную панораму Музея читателя',
        link: 'http://red3d.liart.ru/show/34'
    },
    {
        name: 'Посмотреть трехмерную панораму Голубого зала',
        link: 'http://red3d.liart.ru/show/35'
    },
]
export default function Page3DPanoramasOfTheLibrary() {
    const linkPage = useTemplateLinkPage(dataPage, '3D панорамы библиотеки', '3D панорамы библиотеки')
    return <>
        {linkPage.getRendiring()}
    </>
}