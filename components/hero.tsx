import React from 'react'

import { title, subtitle } from '@/components/primitives'

function Hero() {
	return (
		<div className='inline-block max-w-xl text-center justify-center mt-10'>
			<span className={title()}>Підготовка&nbsp;</span>
			<span className={title({ color: 'violet' })}>працівників&nbsp;</span>
			<br />
			<span className={title()}>для Господніх жнив.</span>
			<div className={subtitle({ class: 'mt-4' })}>з 1996 року</div>
		</div>
	)
}

export default Hero
