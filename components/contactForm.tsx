import { Input } from '@nextui-org/input'

export default function ContactForm() {
	return (
		<div className='flex w-full bg-zinc-200 px-6 py-10 flex-wrap md:flex-nowrap mt-10 mb-6 md:mb-0 gap-4'>
			<Input size='lg' type='text' label='Name' />
			<Input size='lg' type='email' label='Email' />
			<Input size='lg' type='phone' label='Phone' />
		</div>
	)
}
