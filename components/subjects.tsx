'use client'

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

function Subjects() {
	const subjects = [
		'Життя та служіння Ісуса Христа',
		'Христологія',
		'Особа та служіння Духа Святого',
		'Теологія',
		'Бібліологія',
		'Сотеріологія',
		'Ангелологія',
		'Хамартіологія та антропологія',
		'Еклесіологія',
		'Есхатологія',
		'Огляд Старого Заповіту',
		'Буття, розділи 1-11',
		'Царі Юдеї та Ізраїлю',
		'Поезія мудрості',
		'Книга пророка Ісаї',
		'Книга Даниїла',
		'Малі пророки',
		'Огляд Нового Заповіту',
		'Чотири Євангелії',
		'Послання Івана',
		'Послання до Галатів',
		'Послання до Єфесян',
		'Послання до Римлян',
		'Перше послання до Коринтян',
		'Перше і друге послання до Тимофія',
		'Послання до Євреїв',
		'Об’явлення',
		'Біблійна етика',
		'Біблійне душпастирство',
		'Історія християнства',
		'Біблійний сепаратизм',
		'Культи та лжерелігії',
		'Відмінні риси баптистів',
		'Місіологія',
		'Біблійна філософія музики',
		'Герменевтика',
		'Гомілетика',
		'Методика біблійного уроку',
		'Особистий євангелізм',
		'Систематичне богослов’я',
		'За Його образом',
		'Християнська сім’я',
	]

	return (
		<>
			<div className='w-full mx-3 p-3 pb-0 mt-20 rounded-xl animation-timeline animate-emergence bg-[url("/book.png")] bg-contain bg-no-repeat bg-bottom'>
				<h2 className='text-3xl font-bold text-center'>Ти Вивчиш:</h2>
				<Swiper
					autoplay={{
						delay: 1500,
						disableOnInteraction: false,
					}}
					modules={[Autoplay]}
					className='mySwiper'>
					{subjects.map((subject, index) => (
						<SwiperSlide key={index} className='subjectSlide'>
							<div className='text-2xl sm:text-3xl text-center'>{subject}</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	)
}

export default Subjects
