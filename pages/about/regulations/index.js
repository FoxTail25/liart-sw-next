import Head from "next/head";
import CardRules from "../../../components/layout/card/Card";
import styles from './index.module.scss'
// import Layout from "../../../components/layout"

const dataDepartments = [
    {
        title: 'Правила пользования библиотекой',
        icon: '/rules_library.jpg',
        href: 'rules_library.pdf'
    },
    {
        title: 'Кодекс профессиональной этики сотрудника Российской государственной библиотеки искусств',
        icon: '/librarian_code.png',
        href: 'librarian_code.pdf'
    },
    {
        title: 'Концепция развития электоронной библиотеки Российской государственной библиотеки искусств',
        icon: '/concept_for_development.png',
        href: 'concept_for_development.pdf'
    },

]

export default function DepartmentsPage() {

    return (
        // <Layout>
        <div className={styles.wrapper}>
            <Head>
                <title>Нормативные документы</title>
            </Head>
            <h1 className={styles.title} >Нормативные документы</h1>
            <div className={styles.departments_box}>
                {dataDepartments.map((department, index) => <CardRules
                    key={index}
                    icon={department.icon}
                    title={department.title}
                    href={department.href}
                    slug='documents'
                />)}
            </div>
        </div>
        // </Layout>
    )
}

