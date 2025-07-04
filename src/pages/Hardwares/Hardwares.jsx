import React from 'react'
import { Helmet } from 'react-helmet'
import ProductHero from '../../components/ProductHero'
import Pricing from './Pricing'

export default function Hardwares() {
  return (
    <section>
      <Helmet>
        <title>BFINIT Hardwares</title>
        <meta
          name="description"
          content="BFINIT servers are the ideal choice for home or businesses, easily allowing you to increase server capacity as your workload or business grows. They are designed for always-on operation and offer all the reliability and performance benefits of server hardware, without the need to invest in expensive rack mounting hardware."
        />
      </Helmet>

      <ProductHero
        title="BFINIT Hardwares"
        subTitle="BFINIT servers are the ideal choice for home or businesses, easily allowing you to increase server capacity as your workload or business grows. They are designed for always-on operation and offer all the reliability and performance benefits of server hardware, without the need to invest in expensive rack mounting hardware."
      />
      <Pricing/>
    </section>
  )
}
