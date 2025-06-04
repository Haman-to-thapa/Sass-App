import CompanionFrom from '@/components/CompanionFrom'
import React from 'react'

const NewCompanions = () => {
  return (
    <main className='min-lg:w-1/3 min-md:w-2/3 items-center justify-center'>
      <article className='w-full gap-4 flex flex-col'>
        <h1>Comapanion builder</h1>
        <CompanionFrom />
      </article>
    </main>
  )
}

export default NewCompanions
