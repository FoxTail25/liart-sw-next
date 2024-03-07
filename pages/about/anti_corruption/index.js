import useTemplateLinkPage from "../../../hooks/templateLinkPage/useTemplateLinkPage"
import Layout from "../../../components/layout"

const dataDepartments = [
    {
        name: 'Нормативно-правовые акты по противодействию коррупции',
        flag: false,
        link: 'Список.jpg'
    },
    {
        name: 'Памятка о мерах противодействия коррупции для должностных лиц РГБИ ',
        link: 'pamatka.doc'
    },
    {
        name: 'Сведения о доходах, об имуществе и обязательствах имущественного характера на сайте Минкультуры России ',
        flag: true,
        link: 'https://culture.gov.ru/activities/anti_corruption/income/'
    },
    {
        name: 'Положение о сообщении лицами, занимающими должность в РГБИ, о получении подарка в связи с их должностым положением или исполнением ими служебных обязанностей, сдаче и оценке подарка ',
        link: 'podarki.pdf'
    },
    {
        name: 'Комиссия по урегулированию конфликта интересов',
        link: 'scan_2017-07-14-30-42%20%281%29.jpg'
    },
    {
        name: 'Положение о порядке соблюдения лицами, замещающими должности в РГБИ, о возникновении личной заинтересованности при исполнении должностных обязанностей, которая приводит или может привести к конфликту интересов',
        link: 'zai.pdf'
    },
    {
        name: 'Уведомление о личной заинтересованности',
        link: 'scan_2017-07-14-44-28cut.jpg'
    },
    {
        name: 'ОУведомление о получении подарка',
        link: 'scan_2017-07-14-35-04.jpg'
    }  
]

export default function DepartmentsPage() {
    const linkPage = useTemplateLinkPage(dataDepartments, 'Отделы библиотеки', 'Отделы библиотеки', '/media/files/img/11072017/')
    return(
        <Layout>
            {linkPage.getRendiring()}
        </Layout>
    )
}