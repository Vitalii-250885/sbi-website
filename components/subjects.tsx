import React from 'react'

function Subjects() {
	const star = (
		<svg
			className='mx-2 w-2 fill-current'
			viewBox='0 0 116 116'
			xmlns='http://www.w3.org/2000/svg'>
			<path d='M58 0L59.3036 3.52301C68.4193 28.1577 87.8423 47.5807 112.477 56.6964L116 58L112.477 59.3036C87.8423 68.4193 68.4193 87.8423 59.3036 112.477L58 116L56.6964 112.477C47.5807 87.8423 28.1577 68.4193 3.52301 59.3036L0 58L3.523 56.6964C28.1577 47.5807 47.5807 28.1577 56.6964 3.523L58 0Z' />
		</svg>
	)

	const subjects = [
		'Систематичне богослов’я',
		'Послання до Римлян',
		'Біблійне душпастирство',
		'Служіння серед дітей',
		'Огляд Старого Заповіту',
		'Огляд Нового Заповіту',
		'Історія церкви',
		'Герменевтика',
		'Гомілетика',
		'Філософія музики',
		'Християнська сім’я',
	]

	return (
		<div className='px-6 pt-20 '>
			<h2 className='text-4xl font-bold animation-timeline animate-emergence'>
				Ти вивчиш:
			</h2>
			<div className='flex flex-wrap items-center pt-10 '>
				{subjects.map(subject => (
					<>
						<span className='whitespace-nowrap text-2xl opacity-70 leading-6 animation-timeline animate-emergence'>
							{subject}
						</span>
						<span className='animation-timeline animate-emergence'>{star}</span>
					</>
				))}
			</div>
		</div>
	)
}

export default Subjects
