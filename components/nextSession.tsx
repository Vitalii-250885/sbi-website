import React from 'react'
import CalendarComponent from './calendar'
import SubjectsNextSession from './subjectsNextSession'

function NextSession() {
	return (
		<div
			id='nextSession'
			className='pt-20 px-6 flex flex-col items-center w-full sm:px-12 animation-timeline animate-emergence'>
			<h2 className='text-center text-3xl font-bold mb-6 animation-timeline animate-emergence'>
				Наступна Сесія
			</h2>
			<div className='flex flex-col lg:flex-row items-center gap-6 lg:items-stretch'>
				<CalendarComponent />
				<SubjectsNextSession />
			</div>
		</div>
	)
}

export default NextSession
