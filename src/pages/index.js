import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello guys.</h1>
            <h2>I'm Andrew, a Fullstack Developer living in beautiful Philly.</h2>
            <p>Need a Developer? <Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default IndexPage