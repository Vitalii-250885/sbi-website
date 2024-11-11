import React from 'react'

function Program() {
	return (
		<div className='flex flex-col w-full px-6 pt-14'>
			<span className='animation-timeline animate-left text-xl opacity-70'>
				Скільки років навчання?
			</span>
			<span className='text-3xl animation-timeline animate-left'>4 роки</span>
			<span className='self-end mt-10 text-xl opacity-70 animation-timeline animate-right'>
				Скільки сесій у рік?
			</span>
			<span className='self-end text-3xl animation-timeline animate-right'>
				4 сесії
			</span>
			<span className='text-xl mt-10 opacity-70 animation-timeline animate-left'>
				Скільки днів сесія?
			</span>
			<span className='text-3xl animation-timeline animate-left'>5 днів</span>
			<span className='self-end text-xl mt-10 opacity-70 animation-timeline animate-right'>
				Скільки предметів на сесії?
			</span>
			<span className='self-end text-3xl animation-timeline animate-right'>
				2 предмети
			</span>
		</div>
	)
}

export default Program
