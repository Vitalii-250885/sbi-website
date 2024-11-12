import React from 'react'
import CalendarComponent from './calendar'
import SubjectsNextSession from './subjectsNextSession'

function NextSession() {
	return (
		<div id='nextSession' className='pt-20 px-6 flex flex-col items-center'>
			<h2 className='text-center text-3xl font-bold mb-6'>Наступна сесія</h2>
			<CalendarComponent />
			<SubjectsNextSession />
		</div>
	)
}

export default NextSession
