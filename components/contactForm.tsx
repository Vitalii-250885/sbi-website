'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { Button } from '@nextui-org/button'
import { Input, Textarea } from '@nextui-org/input'
import { Link } from '@nextui-org/link'

export default function ContactForm() {
	return (
		<div id='contacts' className='flex w-full px-6 pt-20 pb-6 flex-col gap-4'>
			<h2 className='text-3xl font-bold text-center'>Контакти</h2>

			<Accordion variant='shadow'>
				<AccordionItem key='1' title='Номери телефонів'>
					<Link className='font-bold' color='foreground'>
						<img src='/phone.png' alt='facebook' className='w-7 mr-2' />
						+38 (068)-368-93-07
					</Link>
					<Link className='font-bold' color='foreground'>
						<img src='/phone.png' alt='facebook' className='w-7 mr-2' />
						+38 (099)-619-31-61
					</Link>
				</AccordionItem>
				<AccordionItem key='2' title='Електронна пошта'>
					<Link className='font-bold' color='foreground'>
						<img src='/mail.png' alt='facebook' className='w-7 mr-2' />
						sbi.in.ua@gmail.com
					</Link>
				</AccordionItem>
				<AccordionItem key='3' title='Соціальні мережі'>
					<Link key={'1'} className='mr-5' color='foreground'>
						<img src='/facebook.png' alt='facebook' className='w-7 mr-2' />
						<span className='font-bold'>sbiukraine</span>
					</Link>
					<Link key={'2'} color='foreground'>
						<img src='/instagram.png' alt='facebook' className='w-7 mr-2' />
						<span className='font-bold'>sbiukr</span>
					</Link>
				</AccordionItem>
			</Accordion>

			<h3 className='text-2xl text-center font-bold mt-5'>Напишіть нам</h3>

			<Input
				variant='flat'
				size='lg'
				type='text'
				label='Ім&acute;я'
				isRequired
			/>
			<Input
				variant='flat'
				size='lg'
				type='email'
				label='Електронна пошта'
				isRequired
			/>
			<Input
				variant='flat'
				size='lg'
				type='phone'
				label='Номер телефону'
				isRequired
			/>
			<Textarea variant='flat' label='Повідомлення' />
			<Button color='primary' variant='solid'>
				Надіслати
			</Button>
		</div>
	)
}
