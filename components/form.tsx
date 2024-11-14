import { Button } from '@nextui-org/button'
import { Formik, Form, Field } from 'formik'

function MailForm() {
	const handleSubmit = (values: Object, actions: Object) => {
		console.log(values)
		// actions.resetForm()
		// const form = e.currentTarget

		// if (name !== '' && phoneNumber !== '' && email !== '') {
		// 	setIsSubmitting(true)
		// 	setFormData({
		// 		name,
		// 		phoneNumber,
		// 		email,
		// 		message,
		// 	})
		// 	form.reset()
		// 	setTimeout(() => setIsSubmitting(false), 10000)
		// }

		// if (name === '') {
		// 	setIsNameValid(false)
		// }
		// if (phoneNumber === '') {
		// 	setIsPhoneNumberValid(false)
		// }
		// if (email === '') {
		// 	setIsMailValid(false)
		// }

		// setTimeout(() => {
		// 	setIsNameValid(true)
		// 	setIsPhoneNumberValid(true)
		// 	setIsMailValid(true)
		// }, 2000)
	}

	const initialValues = {
		name: '',
		phone: '',
		email: '',
		message: '',
	}

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form className='flex flex-col gap-3 mt-6 md:mt-0 w-full'>
				<Field
					type='name'
					name='name'
					placeholder="Ім'я"
					className='w-full h-14 rounded-2xl bg-zinc-500 bg-opacity-20 px-6 animation-timeline animate-emergence focus-within:placeholder:opacity-45 focus-within:placeholder:duration-200'
				/>
				<Field
					placeholder='Номер телефону'
					type='phone'
					name='phone'
					className='w-full h-14 rounded-2xl bg-zinc-500 bg-opacity-20 px-6 animation-timeline animate-emergence focus-within:placeholder:opacity-45 focus-within:placeholder:duration-200'
				/>
				<Field
					placeholder='Електронна пошта'
					type='email'
					name='email'
					className='w-full h-14 rounded-2xl bg-zinc-500 bg-opacity-20 px-6 animation-timeline animate-emergence focus-within:placeholder:opacity-45 focus-within:placeholder:duration-200'
				/>
				<Field
					placeholder='Повідомлення'
					as='textarea'
					rows='3'
					type='text'
					name='message'
					className='w-full py-3 rounded-2xl bg-zinc-500 bg-opacity-20 px-6 animation-timeline animate-emergence focus-within:placeholder:opacity-45 focus-within:placeholder:duration-200'
				/>
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
