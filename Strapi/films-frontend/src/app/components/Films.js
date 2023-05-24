'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Films = async() => {
  const [pageIndex, setPageIndex] = useState(1)
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/films/?pagination[page]=${pageIndex}&pagination[pageSize]=4`
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
                <Link href={`film/` + film.attributes.slug}>
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