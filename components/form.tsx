import { Button } from '@nextui-org/button'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import axios from 'axios'

import * as Yup from 'yup'

interface MailFormProps {
	setIsSubmitting: (value: boolean) => void
}

interface ValuesTypes {
	name: string
	phone: string
	email: string
	message: string
}

function MailForm({ setIsSubmitting }: MailFormProps) {
	const initialValues = {
		name: '',
		phone: '',
		email: '',
		message: '',
	}

	const FORMSPREE_URL = 'https://formspree.io/f/xeoqknew'

	const handleSubmit = (
		values: ValuesTypes,
		actions: FormikHelpers<ValuesTypes>
	) => {
		try {
			axios.post(FORMSPREE_URL, values)
			console.log('success')
		} catch (error) {
			console.log('Error!!!', error)
		}
		actions.resetForm()
		setIsSubmitting(true)
		setTimeout(() => setIsSubmitting(false), 10000)
	}

	const FeedbackSchema = Yup.object().shape({
		name: Yup.string()
			.min(2, 'Занадто коротке!')
			.max(50, 'Занадто довге!')
			.required("Обов'язково!"),
		phone: Yup.string()
			.min(8, 'Занадто короткий!')
			.max(20, 'Занадто довгий!')
			.required("Обов'язково!"),
		email: Yup.string()
			.email('Повинен бути правильний e-mail!')
			.required("Обов'язково!"),
		message: Yup.string().min(3, 'Занадто коротке').max(256, 'Занадто довге'),
	})

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={FeedbackSchema}>
			<Form className='flex flex-col gap-3 mt-6 md:mt-0 w-full'>
				<div className='relative'>
					<Field
						type='name'
						name='name'
						placeholder="Ім'я"
						className='w-full border-2 border-zinc-500 border-opacity-20 focus-within:border-blue-500 h-14 rounded-2xl bg-zinc-500 bg-opacity-20 px-6 animation-timeline animate-emergence focus-within:placeholder:opacity-45 focus-within:placeholder:duration-200'
					/>
					<ErrorMessage
						name='name'
						component='span'
						className='absolute top-1 left-6 text-red-500 text-xs'
					/>
				</div>
				<div className='relative'>
					<Field
						placeholder='Номер телефону'
						type='phone'
						name='phone'
						className='w-full border-2 border-zinc-500 border-opacity-20 focus-within:border-blue-500 h-14 rounded-2xl bg-zinc-500 bg-opacity-20 px-6 animation-timeline animate-emergence focus-within:placeholder:opacity-45 focus-within:placeholder:duration-200'
					/>
					<ErrorMessage
						name='phone'
						component='span'
						className='absolute top-1 left-6 text-red-500 text-xs'
					/>
				</div>
				<div className='relative'>
					<Field
						placeholder='Електронна пошта'
						type='email'
						name='email'
						className='w-full border-2 border-zinc-500 border-opacity-20 focus-within:border-blue-500 h-14 rounded-2xl bg-zinc-500 bg-opacity-20 px-6 animation-timeline animate-emergence focus-within:placeholder:opacity-45 focus-within:placeholder:duration-200'
					/>
					<ErrorMessage
						name='email'
						component='span'
						className='absolute top-1 left-6 text-red-500 text-xs'
					/>
				</div>
				<div className='relative'>
					<Field
						placeholder='Повідомлення'
						as='textarea'
						rows='3'
						type='text'
						name='message'
						className='w-full border-2 border-zinc-500 border-opacity-20 focus-within:border-blue-500 py-3 rounded-2xl bg-zinc-500 bg-opacity-20 px-6 animation-timeline animate-emergence focus-within:placeholder:opacity-45 focus-within:placeholder:duration-200 resize-none'
					/>
					<ErrorMessage
						name='message'
						component='span'
						className='absolute top-1 left-6 text-red-500 text-xs'
					/>
				</div>
				<Button
					type='submit'
					color='primary'
					variant='shadow'
					className='animation-timeline animate-emergence w-40 self-center'>
					Надіслати
				</Button>
			</Form>
		</Formik>
	)
}

export default MailForm
