import React from 'react'

import { RangeCalendar } from '@nextui-org/calendar'
import { CalendarDate } from '@internationalized/date'

function CalendarComponent() {
	let date = new CalendarDate(2025, 2, 3)

	return (
		<RangeCalendar
			aria-label='Наступна сесія'
			value={{
				start: date,
				end: date.add({ days: 4 }),
			}}
			isReadOnly
			className='animation-timeline animate-emergence'
		/>
	)
}

export default CalendarComponent
