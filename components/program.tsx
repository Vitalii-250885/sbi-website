import React from 'react'

function Program() {
	return (
		<div className='flex flex-col w-full px-6 pt-14'>
			<span className='text-xl'>Скільки років навчання?</span>
			<span className='text-3xl'>4 роки</span>
			<span className='self-end mt-10 text-xl'>Скільки сесій у рік?</span>
			<span className='self-end text-3xl'>4 сесії</span>
			<span className='text-xl mt-10'>Скільки днів сесія?</span>
			<span className='text-3xl'>5 днів</span>
			<span className='self-end text-xl mt-10'>
				Скільки предметів на сесії?
			</span>
			<span className='self-end text-3xl'>2 предмети</span>
		</div>
	)
}

export default Program
