import { Link } from '@nextui-org/link'
import { button as buttonStyles } from '@nextui-org/theme'

import { Logo } from '@/components/icons'
import Hero from '@/components/hero'
import ContactForm from '@/components/contactForm'

export default function Home() {
	return (
		<section className='flex flex-col items-center justify-center gap-4 md:py-10'>
			<Logo width={56} />
			<Hero />
			<div className='flex gap-3 w-'>
				<Link
					isExternal
					className={buttonStyles({
						color: 'primary',
						radius: 'full',
						variant: 'shadow',
					})}
					href=''>
					Дізнатися більше
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: 'bordered', radius: 'full' })}
					href=''>
					Зареєструватися
				</Link>
			</div>
			<ContactForm />
		</section>
	)
}
