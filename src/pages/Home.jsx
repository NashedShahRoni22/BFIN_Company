import React from 'react'
import HomeLanding from '../components/HomeLanding'
import OurServices from '../components/OurServices'
import DigitalEconomy from '../components/DigitalEconomy'
import OurWorkingProcess from '../components/OurWorkingProcess'
import KeywordsMerque from '../components/KeywordsMerque'
import Testimonials from '../components/Testimonials'
import Question from '../components/Question'

export default function Home() {
  return (
    <main>
        <HomeLanding/>
        <KeywordsMerque/>
        <OurServices/>
        <DigitalEconomy/>
        <OurWorkingProcess/>
        <Testimonials/>
        <Question/> 
    </main>
  )
}
