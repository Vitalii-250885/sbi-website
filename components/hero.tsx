import React from 'react'

import { title, subtitle } from '@/components/primitives'

function Hero() {
	return (
		<div className='inline-block max-w-xl text-center justify-center mt-16'>
			<span className={title()}>Підготовка&nbsp;</span>
			<span className={title({ color: 'violet' })}>Працівників&nbsp;</span>
			<br />
			<span className={title()}>Для Господніх Жнив</span>
			<div className={subtitle({ class: 'mt-4' })}>з 1996 року</div>
		</div>
	)
}

export default Hero
