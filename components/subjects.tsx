'use client'

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

function Subjects() {
	const subjects = [
		'Систематичне богослов’я',
		'Послання до Римлян',
		'Біблійне душпастирство',
		'Служіння серед дітей',
		'Огляд Старого Заповіту',
		'Огляд Нового Заповіту',
		'Історія церкви',
		'Герменевтика',
		'Гомілетика',
		'Філософія музики',
		'Християнська сім’я',
	]

	return (
		<>
			<div className='w-full mx-3 p-3 mt-20 rounded-xl animation-timeline animate-emergence'>
				<h2 className='text-3xl font-bold text-center'>Ти вивчиш:</h2>
				<Swiper
					autoplay={{
						delay: 1500,
						disableOnInteraction: false,
					}}
					modules={[Autoplay]}
					className='mySwiper'>
					{subjects.map(subject => (
						<SwiperSlide>
							<div className='text-2xl text-center'>{subject}</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	)
}

export default Subjects
