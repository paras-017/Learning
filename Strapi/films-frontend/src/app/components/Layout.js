import Head from 'next/head'
import React from 'react'

const Layout = ({Children}) => {
  return (
    <>
       <Head>
        <title>Film database</title>
       </Head>
       <main className='px-4'>
          <div className="flex justify-center items-center bg-white mx-auto w-2/4 rounded-lg my-16 p-16">
            <div className="text-2xl font-medium">{Children}</div>
          </div>
       </main>
    </>
  )
}

export default Layout