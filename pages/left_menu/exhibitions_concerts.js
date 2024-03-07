import useTemplatePageData from "../../hooks/templatePageData/useTemplatePageData";
import useTemplateLinkPsge from '../../hooks/templateLinkPage/useTemplateLinkPage'
// import Layout from "@/components/layout";

const dataPage = [
    {
        name: 'Предложения передвижных выставок',
        link: '/'
    },
    {
        name: 'Виртуальные выставки',
        link: '/'
    },
    {
        name: 'Концерты в РГБИ',
        link: '/'
    },
    {
        name: 'Архив выставок РГБИ',
        link: '/'
    },
    {
        name: 'Трехмерные (3D) панорамы прошедших экспозиций и выставок',
        link: '/'
    },
    {
        name: 'С 25 декабря 2023 года по 15 января 2024 года проходила выставка «Сказка в творчестве наших читателей»',
        link: '/'
    },
    {
        name: 'С 16 по 31 января проходила выставка «Несломленные: блокадное детство в воспоминаниях деятелей искусств»',
        link: '/'
    }
]



export default function ExhibitionsAndConcerts() {
    const templateLinkPage = useTemplateLinkPsge(dataPage, 'Выставки, концерты', 'Выставки, концерты')

    return (<>
        {/* <Layout> */}
        {templateLinkPage.getRendiring()}
        {/* </Layout> */}
    </>
    )
}