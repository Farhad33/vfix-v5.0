import React, { useEffect } from 'react'
import Head from 'next/head'
import FirstPage from '../components/firstPage'
import Why from '../components/why'
import Services from '../components/services'
import Contact from '../components/contact'
import Footer from '../components/footer'
import hotjar from '../components/utility/hotjar'

export default function Index() {

  useEffect(() => {
    hotjar()
  }, [])

    return (
        <>
            <Head>
                <title>VFIX</title>
                <meta name="description" content="VFix provides onsite computer and handyman services such as TV Mounting, Furniture Assembly, Exercise Equipment Assembly wall hanging and more."></meta>
                <meta name="keywords" content="VFix, VFix San Francisco, myvfix, Computer Support, Printer Setup, Wifi Solution, Virus Removal, Electronic Setup, PC Tune-Up, Data Backup, Artificial Intelligence, Smart Home Setup, Smart Lighting, Smart Lock, Smart Remote Setup, Smart Thermostat, Board Installation, Furniture Assembly, Grill Assembly, Handyman Services, TV Mount Service"></meta>
                <link rel="shortcut icon" href="static/assets/logo/site-icon.png"></link>
            </Head>
            <FirstPage />
            <Why />
            <Services />
            <Contact />
            <Footer />
            <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
        </>
    )
}