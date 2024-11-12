import {
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from '@nextui-org/react'
import React from 'react'

function SubjectsNextSession() {
	return (
		<div className='mt-12 animation-timeline animate-emergence'>
			<h3 className='text-center text-xl font-bold mb-6 animation-timeline animate-emergence'>
				Теми наступної сесії
			</h3>
			<Table className='w-full animation-timeline animate-emergence'>
				<TableHeader>
					<TableColumn className='text-center'>Предмет</TableColumn>
					<TableColumn className='text-center'>Лектор</TableColumn>
				</TableHeader>
				<TableBody>
					<TableRow key='1'>
						<TableCell>Вчення Біблії про гріх і людину</TableCell>
						<TableCell>Абрамцов Олексій</TableCell>
					</TableRow>
					<TableRow key='2'>
						<TableCell>Вивчення книги пророка Даниїла</TableCell>
						<TableCell>Парфенюк Павло Васильович</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	)
}

export default SubjectsNextSession
