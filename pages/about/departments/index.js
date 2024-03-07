import useTemplateLinkPage from "../../../hooks/templateLinkPage/useTemplateLinkPage"
import Layout from "../../../components/layout"


const dataDepartments = [
    {
        name: 'Отдел обслуживания читальных залов, статистики и контроля',
        icon: '/front desk.svg',
        link: '/each_department/121'
    },
    {
        name: 'Отдел хранения библиотечных фондов',
        icon: '/librarian.svg',
        link: '/each_department/130'
    },
    {
        name: 'Отдел научной обработки',
        icon: '/scientific_processing.svg',
        link: '/each_department/126'
    },
    {
        name: 'Отдел научной информации',
        icon: '/scientific_information.svg',
        link: '/each_department/128'
    },
    {
        name: 'Центр визуальной информации',
        icon: '/visual_information.svg',
        link: '/each_department/129'
    },
    {
        name: 'Отдел абонемента',
        icon: '/abonement.svg',
        link: '/each_department/123'
    },
    {
        name: 'Отдел научной библиографии',
        icon: '/scientific_bibliography.svg',
        link: '/each_department/125'
    },
    {
        name: 'Отдел культурных программ',
        icon: '/cultural_programs.svg',
        link: '/each_department/124'
    },
    {
        name: 'Центр информационных технологий',
        icon: '/information_technology.svg',
        link: '/each_department/122'
    },
    {
        name: 'Отдел комплектования',
        icon: '/acquisition.svg',
        link: '/each_department/245'
    }   
]

export default function DepartmentsPage() {
    const linkPage = useTemplateLinkPage(dataDepartments, 'Отделы библиотеки', 'Отделы библиотеки', '/about/departments/')
    return(
        <Layout>
            {linkPage.getRendiring()}
        </Layout>
    )
}