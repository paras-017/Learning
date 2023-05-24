import React from 'react'

const page =async ({params}) => {
    const {slug} = params;

    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/films?filters[slug]=${slug}`;

    const options = {
        method: 'GET',
    };

    const res = await fetch(url, options);
    const film = await res.json();
    console.log(film)

  return (
    <>
    <h1 className='text-5xl md:text-6xl font-extrabold leading-tight mb-4'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2'>
        {film.data[0].attributes.title}
        </span>
    </h1>
    </>
  )
}

export default page