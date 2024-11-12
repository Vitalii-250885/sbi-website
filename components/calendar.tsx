import React from 'react'

import { RangeCalendar } from '@nextui-org/react'
import { CalendarDate } from '@internationalized/date'

function CalendarComponent() {
	let date = new CalendarDate(2024, 11, 25)

	return (
		<div id='calendar' className='pt-20'>
			<h2 className='text-center text-xl mb-3'>Наступна сесія</h2>
			<RangeCalendar
				aria-label='Наступна сесія'
				value={{
					start: date,
					end: date.add({ days: 4 }),
				}}
				isReadOnly
			/>
		</div>
	)
}

export default CalendarComponent
