'use client'

import { Link } from '@nextui-org/link'
import { button as buttonStyles } from '@nextui-org/theme'

import Hero from '@/components/hero'
import ContactForm from '@/components/contactForm'
import Program from '@/components/program'
import Subjects from '@/components/subjects'
import Testimonials from '@/components/testimonials'
import NextSession from '@/components/nextSession'
import { NavbarApp } from '@/components/navbar'


export default function Home() {
	return (
		<>
		<NavbarApp />
		<section className='flex flex-col items-center justify-center gap-4 pt-8'>
			<img src='logo.png' alt='logo' className='w-56 animate-emergence' />
			<Hero />
			<div className='flex gap-3 mt-16 animate-emergence'>
				<Link
					className={buttonStyles({
						color: 'primary',
						radius: 'full',
						variant: 'shadow',
					})}
					href='#contacts'>
					Дізнатися Більше
				</Link>
			</div>
			<Program />
			<Subjects />
			<NextSession />
			<Testimonials />
			<ContactForm />
		</section>
		</>
	)
}
