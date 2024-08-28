import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <section className="mx-5 md:container md:mx-auto min-h-screen flex flex-col gap-10 justify-center items-center">
      <h1 className="text-5xl md:text-7xl font-extrabold">
        <span className='text-red-500'>404</span> Not Found 
      </h1>
      <Link to={"/"} className="font-semibold text-primary md:text-xl capitalize underline">
        Go back to home
      </Link>
    </section>
  )
}
