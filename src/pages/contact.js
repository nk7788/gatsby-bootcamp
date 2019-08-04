import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"

const ContactUs = () => {
    return (
        <Layout>
            <Head title="Contact"/>
        <h1>Contact Us</h1>
        <p>Contact us at:</p>
        <ol>
            <li>Phone number: +555 555 555</li>
            <li>Email: aboutus@gatsby.com</li>
            <li>Twitter: <a href="https://www.twitter.com" target="_blank">My Twitter</a></li>
        </ol>
        </Layout>
    )
}

export default ContactUs