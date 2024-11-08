import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'
import { Input, Textarea } from '@nextui-org/input'
import { Link } from '@nextui-org/link'

export default function ContactForm() {
	return (
		<div
			id='contacts'
			className='flex w-full bg-blue-100 px-6 py-20 flex-col gap-4'>
			<h2 className='flex items-center text-xs font-bold mb-5 before:w-2 before:h-2 before:inline-flex before:rounded-full before:mr-2 before:bg-black'>
				Контакти
			</h2>
			<Card>
				<CardBody>
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
				</CardBody>
			</Card>

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
