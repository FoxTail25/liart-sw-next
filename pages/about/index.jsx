// import Layout from "../../components/layout"

import Head from "next/head";


export async function getServerSideProps() {
    let rep = 5
    // Fetch data from external API
    let re = await fetch('http://localhost:3000/api/hi').then(res => res.json())
    console.log('about_server', re)
    // Pass data to the page via props
    return { props: { rep, re } }
}

export default function About({ rep, re }) {

    console.log('about_client', rep, re)


    return <>
        <Head>
            <title>О библиотеке</title>
        </Head>
        <p>about</p>
    </>
}