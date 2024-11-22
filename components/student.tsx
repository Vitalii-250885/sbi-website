import { Image } from '@nextui-org/image'
import React from 'react'
import { title } from './primitives'
import clsx from 'clsx'

function Student() {
  return (
    <div className='flex px-3 gap-3 justify-between'>
    <Image
      isBlurred
      src="/Vova-small.jpg"
      alt="Володимир Цап"
      className="mt-5 mr-5 mb-5 border-2 border-blue-500"
    />
    <div className='flex flex-col items-end'>
     <h3 className={clsx(title({ size: 'sm', color: 'blue' }), 'text-right')}>Володимир <br /> Цап</h3>
     <p className='text-sm mt-5'>Дата вступу</p>
     <p className='text-sm text-zinc-500'>12.01.2020</p>
     <p className='text-sm mt-1'>Дата випуску</p>
     <p className='text-sm text-zinc-500'>-</p>
     </div>
    </div>
  )
}

export default Student
