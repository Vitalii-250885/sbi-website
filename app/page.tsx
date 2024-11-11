import { Link } from '@nextui-org/link'
import { button as buttonStyles } from '@nextui-org/theme'

import { Logo } from '@/components/icons'
import Hero from '@/components/hero'
import ContactForm from '@/components/contactForm'
import Program from '@/components/program'
import Subjects from '@/components/subjects'

export default function Home() {
	return (
		<section className='flex flex-col items-center justify-center gap-4 py-8'>
			<img src='logo.png' alt='logo' className='w-56' />
			<Hero />
			<div className='flex gap-3 mt-16'>
				<Link
					className={buttonStyles({
						color: 'primary',
						radius: 'full',
						variant: 'shadow',
					})}
					href='#contacts'>
					Дізнатися більше
				</Link>
				<Link
					className={buttonStyles({ variant: 'bordered', radius: 'full' })}
					href='#'>
					Зареєструватися
				</Link>
			</div>
			<Program />
			<Subjects />
			<ContactForm />
		</section>
	)
}
