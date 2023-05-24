
import Link from 'next/link'
import React from 'react'

const Films = async() => {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/films/?populate=*`
    const option = {
      method: 'GET',
      next: { revalidate: 1 } 
    }
    const res = await fetch(url, option)
    const films = await res.json()
  return (
    <>
     <ul className="list-none space-y-4 text-4xl font-bold mb-3">
        {films &&
          films.data.map((film) => {
            return (
              <li key={film.id}>
                <Link href={`films/` + film.attributes.slug}>
                  {film.attributes.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  )
}

export default Films