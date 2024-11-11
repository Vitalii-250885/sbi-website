import { Image } from '@nextui-org/image'
import React from 'react'

function Testimonials() {
	return (
		<div className='mx-3 p-3 mt-20 bg-slate-400 bg-opacity-10 rounded-xl animation-timeline animate-emergence'>
			<h2 className='text-3xl font-bold text-center'>Відгуки студентів</h2>
			<div className='pt-6 relative before:content-["\00BB"] before:text-[360px] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-5'>
				<div className='flex justify-between'>
					<Image isBlurred src='irina.jpeg' alt='Irina' className='m-5 w-28' />
					<p className='mt-5 font-bold text-right text-2xl'>
						Ірина <br /> Ожеред
					</p>
				</div>
				<p className='mx-5 animation-timeline animate-emergence'>
					СБІ – це особлива частина мого життя. Місце де Бог по-особливому
					працює в моєму серці, де я надбала нових друзів. Місце, де я надихаюсь
					служити іншим людям і присвячувати себе служінню Богу.
				</p>
			</div>
		</div>
	)
}

export default Testimonials
