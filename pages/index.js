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
          <FirstPage />
          <Why />
          <Services />
          <Contact />
          <Footer />
          <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
        </>
    )
}