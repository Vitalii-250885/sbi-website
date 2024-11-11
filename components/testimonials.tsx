import { Image } from '@nextui-org/image'
import React from 'react'

function Testimonials() {
	return (
		<div className='mx-3 p-3 mt-20 bg-slate-400 bg-opacity-10 rounded-xl'>
			<h2 className='text-3xl font-bold text-center'>Відгуки студентів</h2>
			<div className='pt-6 relative'>
				<div className='flex after:content-["\275E"] after:text-[80vw] after:absolute after:-top-16 after:right-0 after:opacity-10'>
					<Image isBlurred src='irina.jpeg' alt='Irina' className='m-5' />
				</div>
				<p className='mx-5'>
					СБІ – це особлива частина мого життя. Місце де Бог по-особливому
					працює в моєму серці, де я надбала нових друзів. Місце, де я надихаюсь
					служити іншим людям і присвячувати себе служінню Богу.
				</p>
			</div>
		</div>
	)
}

export default Testimonials
