'use client'

import React from 'react'

import { Accordion, AccordionItem } from '@nextui-org/accordion'
import { title } from './primitives'

function Subjects() {
	const doctrines = [
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
	]

	const service = [
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

	const oldTestament = [
		'Огляд Старого Заповіту',
		'Буття, розділи 1-11',
		'Царі Юдеї та Ізраїлю',
		'Поезія мудрості',
		'Книга пророка Ісаї',
		'Книга Даниїла',
		'Малі пророки',
	]

	const newTestament = [
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
	]

	return (
		<>
			<div className='w-full mx-3 p-3 max-w-5xl sm:px-12 pb-0 mt-20 animation-timeline animate-emergence'>
				<h2 className='text-3xl mb-6 font-bold text-center'>Ти Вивчиш:</h2>
				<Accordion variant='shadow'>
					<AccordionItem
						key='1'
						aria-label='Доктрини'
						title={
							<span className={title({ size: 'xs', color: 'blue' })}>
								Доктрини
							</span>
						}>
						{doctrines.map((subject, index) => (
							<div key={index} className='text-lg'>
								{subject}
							</div>
						))}
					</AccordionItem>
					<AccordionItem
						key='2'
						aria-label='Служіння в церкві та особистий духовний ріст'
						title={
							<span className={title({ size: 'xs', color: 'blue' })}>
								Служіння в церкві та особистий духовний ріст
							</span>
						}>
						{service.map((subject, index) => (
							<div key={index} className='text-lg'>
								{subject}
							</div>
						))}
					</AccordionItem>
					<AccordionItem
						key='3'
						aria-label='Книги Старого Заповіту'
						title={
							<span className={title({ size: 'xs', color: 'blue' })}>
								Книги Старого Заповіту
							</span>
						}>
						{oldTestament.map((subject, index) => (
							<div key={index} className='text-lg'>
								{subject}
							</div>
						))}
					</AccordionItem>
					<AccordionItem
						key='4'
						aria-label='Книги Нового Заповіту'
						title={
							<span className={title({ size: 'xs', color: 'blue' })}>
								Книги Нового Заповіту
							</span>
						}>
						{newTestament.map((subject, index) => (
							<div key={index} className='text-lg'>
								{subject}
							</div>
						))}
					</AccordionItem>
				</Accordion>
			</div>
		</>
	)
}

export default Subjects
