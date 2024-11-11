'use client'

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import { Image } from '@nextui-org/image'

import 'swiper/css'
import 'swiper/css/pagination'

import css from './testimonials.module.css'

import testimonials from '../data/testimonials.json'

function Testimonials() {
	return (
		<>
			<div className='w-full mx-3 p-3 mt-20 rounded-xl animation-timeline animate-emergence'>
				<h2 className='text-3xl font-bold text-center'>Відгуки студентів</h2>
				<Swiper
					autoplay={{
						delay: 8000,
						disableOnInteraction: true,
					}}
					modules={[Autoplay]}
					className='mySwiper'>
					{testimonials.map(({ photo, firstName, lastName, article }) => (
						<SwiperSlide>
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
					))}
				</Swiper>
			</div>
		</>
	)
}

export default Testimonials
