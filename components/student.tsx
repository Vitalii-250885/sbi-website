import { Image } from '@nextui-org/image'
import React from 'react'
import { title } from './primitives'
import clsx from 'clsx'

function Student() {
  return (
    <div className='px-3'>
    <div className='flex gap-3 justify-between'>
    <Image
      isBlurred
      src="/Vova-small.jpg"
      alt="Володимир Цап"
      className="mt-5 mr-5 mb-5 border-2 border-blue-500"
    />
    <div className='flex flex-col items-end'>
     <h3 className={clsx(title({ size: 'sm', color: 'blue' }), 'text-right')}>Володимир <br /> Цап</h3>
     <p className='text-sm mt-5'>Дата вступу</p>
     <p className='text-sm text-zinc-500'>20.08.2020</p>
     <p className='text-sm mt-1'>Дата випуску</p>
     <p className='text-sm text-zinc-500'>-</p>
     </div>
    </div>
    <p>Електронна пошта: <a href="mailto:vova@gmail.com" className='text-zinc-500'>vova@gmail.com</a></p>
    <p>Номер телефону: <a href="tell:+380967167473" className='text-zinc-500'>096-716-74-73</a></p>
    <p>Адреса: <span className='text-zinc-500'>-</span></p>
    <p>Церква: <span className='text-zinc-500'>Черче</span></p>
    <p>Служіння: <span className='text-zinc-500'>Проповідник</span></p>
    </div>
  )
}

export default Student
