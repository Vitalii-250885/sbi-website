import { Image } from '@nextui-org/image'
import React from 'react'
import { title } from './primitives'
import clsx from 'clsx'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'

function Student() {
  return (
    <div className='px-3'>
    <div className='flex gap-3 justify-between'>
    <Image
      isBlurred
      src="/Vova-small.jpg"
      alt="Володимир Цап"
      className="mt-5 mr-5 mb-5 border-2 border-blue-500"
    />
    <div className='flex flex-col items-end'>
     <h3 className={clsx(title({ size: 'sm', color: 'blue' }), 'text-right')}>Володимир <br /> Цап</h3>
     <p className='text-sm mt-5'>Дата вступу</p>
     <p className='text-sm text-zinc-500'>20.08.2020</p>
     <p className='text-sm mt-1'>Дата випуску</p>
     <p className='text-sm text-zinc-500'>-</p>
     </div>
    </div>

    {/* <Table
        color='default'
        selectionMode="single"
        defaultSelectedKeys={["2"]}
        aria-label="Example static collection table"
      >
        <TableHeader>{'1': '1'}</TableHeader>
        <TableBody>
        <TableColumn>
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
          </TableRow>
          </TableColumn>
          <TableRow key="2">
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
          </TableRow>
        </TableBody>
      </Table> */}

    
    {/* <table>
      <tr>
        <td>
          <span>E-mail:</span>
        </td>
        <td>
          <a href="mailto:vova@gmail.com" className='text-zinc-500'>vova@gmail.com</a>
        </td>
      </tr>
      <tr>
        <td>
          <span>Телефон:</span>
        </td>
        <td>
        <a href="tel:+380967167473" className='text-zinc-500'>096-716-74-73</a>
        </td>
      </tr>
      <tr>
        <td>
          <span>Адреса:</span>
        </td>
        <td>
          <span className='text-zinc-500'>-</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>Церква:</span>
        </td>
        <td>
        <span className='text-zinc-500'>Черче</span>
        </td>
      </tr>
      <tr>
        <td>
          <span>Служіння:</span>
        </td>
        <td>
          <span className='text-zinc-500'>Проповідник</span>
        </td>
      </tr>
    </table> */}
    </div>
  )
}

export default Student
