import React from 'react'
import HomeLanding from '../components/HomeLanding'
import Businessproof from '../components/Businessproof'
import OurServices from '../components/OurServices'
import DigitalEconomy from '../components/DigitalEconomy'
import OurWorkingProcess from '../components/OurWorkingProcess'

export default function Home() {
  return (
    <main>
        <HomeLanding/>
        <Businessproof/>
        <OurServices/>
        <DigitalEconomy/>
        <OurWorkingProcess/>
    </main>
  )
}
