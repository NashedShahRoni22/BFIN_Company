import React from 'react'
import HomeLanding from '../components/HomeLanding'
import OurServices from '../components/OurServices'
import DigitalEconomy from '../components/DigitalEconomy'
import OurWorkingProcess from '../components/OurWorkingProcess'
import KeywordsMerque from '../components/KeywordsMerque'

export default function Home() {
  return (
    <main>
        <HomeLanding/>
        <KeywordsMerque/>
        <OurServices/>
        <DigitalEconomy/>
        <OurWorkingProcess/>
    </main>
  )
}
