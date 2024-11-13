'use client'

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import { Image } from '@nextui-org/image'

import 'swiper/css'
import 'swiper/css/navigation'

import css from './testimonials.module.css'

import testimonials from '../data/testimonials.json'

function Testimonials() {
	return (
		<>
			<div className='w-full relative px-3 sm:px-12 mt-20 rounded-xl animation-timeline animate-emergence max-w-5xl'>
				<h2 className='text-3xl font-bold text-center'>Відгуки Студентів</h2>
				<Swiper
					loop={true}
					navigation={true}
					autoplay={{
						delay: 20000,
						disableOnInteraction: true,
					}}
					modules={[Autoplay, Navigation]}
					className='mySwiper'>
					{testimonials.map(
						({ photo, firstName, lastName, article }, index) => (
							<SwiperSlide key={index}>
								<div className={css.slide}>
									<div className={css['photo-name']}>
										<Image
											isBlurred
											src={photo}
											alt={firstName}
											className={css.photo}
										/>
										<p className={css.name}>
											{firstName} <br /> {lastName}
										</p>
									</div>
									<p className={css.text}>{article}</p>
								</div>
							</SwiperSlide>
						)
					)}
				</Swiper>
			</div>
		</>
	)
}

export default Testimonials
