'use client'

import { Link } from '@nextui-org/link'
import { title } from './primitives'
import MailForm from './form'

export default function ContactForm() {
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
				{false ? (
					<div className='flex flex-col items-center justify-center h-[25.4rem] sm:h-[26rem]'>
						<p className={title({ color: 'green', size: 'md' })}>Дякуємо!</p>
						<p className='animate-emergence mt-6 text-center'>
							Твоє повідомлення було надіслано нам. Найближчим часом ми з тобою
							зв'яжемось!
						</p>
					</div>
				) : (
					<MailForm />
				)}
			</div>
		</div>
	)
}
