import { Button } from '@nextui-org/button'
import { Input, Textarea } from '@nextui-org/input'
import { Link } from '@nextui-org/link'

export default function ContactForm() {
	return (
		<div
			id='contacts'
			className='flex w-full bg-slate-400 bg-opacity-10 p-6 mt-20 flex-col gap-4'>
			<h2 className='text-3xl font-bold text-center'>Контакти</h2>
			<span>Номери телефонів:</span>
			<Link className='ml-5 font-bold' color='foreground'>
				+38 (068)-368-93-07
			</Link>
			<Link className='ml-5 font-bold' color='foreground'>
				+38 (099)-619-31-61
			</Link>
			<span>Електронна пошта:</span>
			<Link className='ml-5 font-bold' color='foreground'>
				sbi.in.ua@gmail.com
			</Link>

			<h3 className='text-2xl text-center font-bold mt-5'>Напишіть нам</h3>

			<Input
				variant='flat'
				size='lg'
				type='text'
				label='І&acute;мя'
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
