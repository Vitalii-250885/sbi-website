import React from 'react'

function Program() {
	return (
		<div className='relative flex flex-col w-full px-6 sm:px-12 pt-14'>
			<span className='animation-timeline animate-left text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400'>
				Скільки років навчання?
			</span>
			<span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl animation-timeline animate-left font-bold'>
				4 роки
			</span>
			<span className='self-end mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400 animation-timeline animate-left'>
				Скільки сесій у рік?
			</span>
			<span className='self-end text-3xl sm:text-4xl md:text-5xl lg:text-6xl animation-timeline animate-left font-bold'>
				4 сесії
			</span>
			<span className='text-xl mt-10 sm:text-2xl text-gray-400 md:text-3xl lg:text-4xl animation-timeline animate-left'>
				Скільки днів сесія?
			</span>
			<span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl animation-timeline animate-left font-bold'>
				5 днів
			</span>
			<span className='self-end text-xl sm:text-2xl mt-10 text-gray-400 md:text-3xl lg:text-4xl animation-timeline animate-left'>
				Скільки предметів на сесії?
			</span>
			<span className='self-end sm:text-4xl md:text-5xl lg:text-6xl text-3xl animation-timeline animate-left font-bold'>
				2 предмети
			</span>
		</div>
	)
}

export default Program
