'use client'

import { Button } from '@nextui-org/button'
import { Input, Textarea } from '@nextui-org/input'
import { Link } from '@nextui-org/link'
import { useState } from 'react'
import { title } from './primitives'

export default function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		phoneNumber: '',
		email: '',
		message: '',
	})
	const [isNameValid, setIsNameValid] = useState(true)
	const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true)
	const [isMailValid, setIsMailValid] = useState(true)

	console.log(formData)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		const form = e.currentTarget

		const name = e.target[0].value
		const phoneNumber = e.target[1].value
		const email = e.target[2].value
		const message = e.target[3].value

		if (name !== '' && phoneNumber !== '' && email !== '') {
			setIsSubmitting(true)
			setFormData({
				name,
				phoneNumber,
				email,
				message,
			})
			form.reset()
			setTimeout(() => setIsSubmitting(false), 10000)
		}

		if (name === '') {
			setIsNameValid(false)
		}
		if (phoneNumber === '') {
			setIsPhoneNumberValid(false)
		}
		if (email === '') {
			setIsMailValid(false)
		}

		setTimeout(() => {
			setIsNameValid(true)
			setIsPhoneNumberValid(true)
			setIsMailValid(true)
		}, 2000)
	}

	return (
		<div
			id='contacts'
			className='flex w-full px-6 sm:px-12 pt-20 pb-60 flex-col gap-4'>
			<h2 className='text-3xl font-bold text-center animation-timeline animate-emergence'>
				Контакти
			</h2>
			<div className='block md:flex'>
				<div className='flex flex-col gap-3 md:w-80'>
					<Link
						href='tel:+380683689307'
						className='font-bold animation-timeline animate-left'
						color='foreground'>
						<img src='/phone.png' alt='facebook' className='w-7 mr-2' />
						+38 (068)-368-93-07
					</Link>
					<Link
						href='tel:+380996193161'
						className='font-bold animation-timeline animate-left'
						color='foreground'>
						<img src='/phone.png' alt='facebook' className='w-7 mr-2' />
						+38 (099)-619-31-61
					</Link>
					<Link
						href='mailto:sbi.in.ua@gmail.com'
						className='font-bold animation-timeline animate-left'
						color='foreground'>
						<img src='/mail.png' alt='facebook' className='w-7 mr-2' />
						sbi.in.ua@gmail.com
					</Link>
					<div className='flex mt-3 animation-timeline animate-left'>
						<Link
							className='mr-5'
							color='foreground'
							href='https://www.facebook.com/sbiukraine?locale=uk_UA'>
							<img src='/facebook.png' alt='facebook' className='w-7' />
						</Link>
						<Link color='foreground' href='https://www.instagram.com/sbiukr/'>
							<img src='/instagram.png' alt='facebook' className='w-7' />
						</Link>
					</div>
				</div>
				{isSubmitting ? (
					<div className='flex flex-col items-center justify-center h-[25.4rem] sm:h-[26rem]'>
						<p className={title({ color: 'green', size: 'md' })}>Дякуємо!</p>
						<p className='animate-emergence mt-6 text-center'>
							Твоє повідомлення було надіслано нам. Найближчим часом ми з тобою
							зв'яжемось!
						</p>
					</div>
				) : (
					<form
						onSubmit={handleSubmit}
						className='flex flex-col gap-3 mt-6 md:mt-0 w-full'>
						<Input
							variant='flat'
							size='lg'
							type='text'
							color={isNameValid ? 'default' : 'danger'}
							label="Ім'я"
							isRequired
							className='animation-timeline animate-emergence'
						/>
						<Input
							variant='flat'
							size='lg'
							type='phone'
							color={isPhoneNumberValid ? 'default' : 'danger'}
							label='Номер телефону'
							isRequired
							className='animation-timeline animate-emergence'
						/>
						<Input
							variant='flat'
							size='lg'
							type='email'
							color={isMailValid ? 'default' : 'danger'}
							label='Електронна пошта'
							isRequired
							className='animation-timeline animate-emergence'
						/>
						<Textarea
							variant='flat'
							label='Повідомлення'
							className='animation-timeline animate-emergence'
						/>
						<Button
							type='submit'
							color='primary'
							variant='solid'
							className='animation-timeline animate-emergence'>
							Надіслати
						</Button>
					</form>
				)}
			</div>
		</div>
	)
}
