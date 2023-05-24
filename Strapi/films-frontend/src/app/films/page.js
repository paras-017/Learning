import React from 'react'
import Films from '../components/Films'

const page = async() => {
  // const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/films/?populate=*`
  const url = `http://localhost:1337/api/films/?populate=*`
  const option = {
    method: 'GET',
    revalidate: 1
  }
  const res = await fetch(url, option)
  const data = await res.json()
  console.log(data)
  return (
    <>
    <h1 className='text-5xl md:text-6xl font-extrabold leading-tight mb-4'>
      <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2'>
        films
      </span>
    </h1>
    <Films/>
    </>
  )
}

export default page