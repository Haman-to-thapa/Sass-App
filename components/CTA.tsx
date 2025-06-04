import React from 'react'
import image from '../public/download.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

const CTA = () => {
  return (
    <section className='bg-gray-800  text-white flex flex-col items-center mt-10 rounded-lg text-center '>
      <div className="bg-yellow-600 px-5 rounded-full m-5 py-2">Start learning your way</div>
      <h2 className='text-3xl font-bold mx-2 mb-10'>Build and Personalize Your Learning Companion</h2>
      <h2 className='text-sm gap-2'>Pick a name, subject , voice , & Personality - and start learning through voice conversations that fell natural and fun.</h2>
      <Image
        src={image}
        alt='cta'
        width={362}
        height={232}
      />
      <Button className='bg-green-800 mt-2 my-2 hover:bg-green-950 '>
        <Link href='/companions/new'>
          <p>Build a New Companion</p>
        </Link>
      </Button>

    </section>
  )
}

export default CTA
