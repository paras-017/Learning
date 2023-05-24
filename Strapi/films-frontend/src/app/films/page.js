import React from 'react'
import Films from '../components/Films'

const page = async() => {
  
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