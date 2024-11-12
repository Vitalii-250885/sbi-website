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
		<div className='mt-12'>
			<h3 className='text-center text-xl font-bold mb-6'>
				Теми наступної сесії
			</h3>
			<Table className='w-full'>
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
