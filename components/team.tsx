import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import React from 'react'

const list = [
	{
		name: 'Дерек Томас',
		img: '/IMG_9681_small.jpg',
		post: 'Президент СБІ',
	},
	{
		name: 'Карл Ліндерман',
		img: '/Karl_small.jpg',
		post: 'Заступник президента СБІ',
	},
	{
		name: 'Мовчан Микола Миколайович',
		img: '/Kolya 200x200.jpg',
		post: 'Декан СБІ',
	},
	{
		name: 'Парфенюк Павло Васильович',
		img: '/DAS03987_small.jpg',
		post: 'Викладач, Перекладач',
	},
	{
		name: 'Процишина Жанна Миколаївна',
		img: '/Janna_small.jpg',
		post: 'Секретар',
	},
	{
		name: 'Процько Віталій Олександрович',
		img: '/vitalii_small.jpg',
		post: 'Музичний керівник',
	},
]

function Team() {
	return (
		<div className='w-full flex flex-col px-6 pt-20'>
			<h2 className='flex items-center text-xs font-bold mb-5 before:w-2 before:h-2 before:inline-flex before:rounded-full before:mr-2 before:bg-black'>
				Наша команда
			</h2>
			<div className='gap-2 grid grid-cols-2 sm:grid-cols-4'>
				{list.map((item, index) => (
					<Card shadow='sm' radius='sm' className='w-full' key={index}>
						<CardBody className='w-full overflow-visible p-0'>
							<Image
								shadow='sm'
								radius='sm'
								width='100%'
								alt={item.name}
								className='w-full object-cover h-[140px]'
								src={item.img}
							/>
						</CardBody>
						<CardFooter className='text-small justify-between block'>
							<b>{item.name}</b>
							<p className='text-sm mt-3'>{item.post}</p>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	)
}

export default Team
