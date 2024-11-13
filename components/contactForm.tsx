'use client'

import { Button } from '@nextui-org/button'
import { Input, Textarea } from '@nextui-org/input'
import { Link } from '@nextui-org/link'

export default function ContactForm() {
	return (
		<div
			id='contacts'
			className='flex w-full px-6 sm:px-12 pt-20 pb-36 flex-col gap-4'>
			<h2 className='text-3xl font-bold text-center animation-timeline animate-emergence'>
				Контакти
			</h2>
			<div className='block md:flex'>
				<div className='flex flex-col gap-3 md:w-80'>
					<Link
						className='font-bold animation-timeline animate-left'
						color='foreground'>
						<img src='/phone.png' alt='facebook' className='w-7 mr-2' />
						+38 (068)-368-93-07
					</Link>
					<Link
						className='font-bold animation-timeline animate-left'
						color='foreground'>
						<img src='/phone.png' alt='facebook' className='w-7 mr-2' />
						+38 (099)-619-31-61
					</Link>
					<Link
						className='font-bold animation-timeline animate-left'
						color='foreground'>
						<img src='/mail.png' alt='facebook' className='w-7 mr-2' />
						sbi.in.ua@gmail.com
					</Link>
					<div className='flex mt-3 animation-timeline animate-left'>
						<Link className='mr-5' color='foreground'>
							<img src='/facebook.png' alt='facebook' className='w-7' />
						</Link>
						<Link color='foreground'>
							<img src='/instagram.png' alt='facebook' className='w-7' />
						</Link>
					</div>
				</div>
				<div className='flex flex-col gap-3 mt-6 md:mt-0 w-full'>
					<Input
						variant='flat'
						size='lg'
						type='text'
						label="Ім'я"
						isRequired
						className='animation-timeline animate-emergence'
					/>
					<Input
						variant='flat'
						size='lg'
						type='phone'
						label='Номер телефону'
						isRequired
						className='animation-timeline animate-emergence'
					/>
					<Input
						variant='flat'
						size='lg'
						type='email'
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
						color='primary'
						variant='solid'
						className='animation-timeline animate-emergence'>
						Надіслати
					</Button>
				</div>
			</div>
		</div>
	)
}
