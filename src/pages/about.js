import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutUs = () => {
    return (
        <Layout>
            <Head title="About"/>
        <h1>Our story</h1>
        <p>I don't really know what to type here, so I'll just write that I don't know what to type to fill up this section</p>
        <p>Don't hesitate to <Link to="/contact">contact me!</Link></p>
        </Layout>
    )
}

export default AboutUs