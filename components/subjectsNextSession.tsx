import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/table'
import React from 'react'

function SubjectsNextSession() {
  return (
    <div className='mt-12 lg:mt-0 animation-timeline animate-emergence'>
      <Table
        aria-label='Предмети наступної сесії'
        className='w-full animation-timeline animate-emergence'>
        <TableHeader>
          <TableColumn className='text-center'>Предмет</TableColumn>
          <TableColumn className='text-center'>Лектор</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key='1'>
            <TableCell>Огляд Старого Завіту</TableCell>
            <TableCell>Дерек Томас</TableCell>
          </TableRow>
          <TableRow key='2'>
            <TableCell>Послання до Євреїв</TableCell>
            <TableCell>Павло Парфенюк</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default SubjectsNextSession
