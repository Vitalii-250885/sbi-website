import React, { useEffect, useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip} from "@nextui-org/react";
import { title } from "./primitives";
import clsx from "clsx";


export default function SubjectTable() {
  const subjects = [
    {
      subject: 'Огляд Нового Заповіту',
      markEx: '5-',
      markHW: '5/5',
      date: '24.08.20'
    },
    {
      subject: 'Послання до Євреїв',
      markEx: '4',
      markHW: '5',
      date: '24.08.20'
    },
    {
      subject: 'Послання до Єфесян',
      markEx: '5-',
      markHW: '5',
      date: '25.01.21'
    },
    {
      subject: 'Царі Юдеї і Ізраілю',
      markEx: '5',
      markHW: '5',
      date: '25.01.21'
    },
    {
      subject: 'Поезія мудрості',
      markEx: '5--',
      markHW: '-',
      date: '10.05.21'
    },
    {
      subject: 'Перше послання до Коринтян',
      markEx: '4-',
      markHW: '-',
      date: '10.05.21'
    },
    {
      subject: 'Біблійна етика',
      markEx: '5+',
      markHW: '-',
      date: '23.08.21'
    },
    {
      subject: 'Бібліологія',
      markEx: '5',
      markHW: '5',
      date: '23.08.21'
    },
    {
      subject: 'Сотеріологія',
      markEx: '5',
      markHW: '5/5',
      date: '15.11.21'
    },
    {
      subject: 'Світові релігії',
      markEx: '5-',
      markHW: '-',
      date: '15.11.21'
    },
    {
      subject: 'Особистість і служіння Духа Святого',
      markEx: '5+',
      markHW: '-',
      date: '24.01.22'
    },
    {
      subject: 'Книга пророка Ісаї',
      markEx: '5+',
      markHW: '-',
      date: '24.01.22'
    },
    {
      subject: 'Особистий євангелізм',
      markEx: '4-',
      markHW: '-',
      date: '30.01.23'
    },
    {
      subject: 'Перше та друге послання до Тимофія',
      markEx: '5',
      markHW: '-',
      date: '30.01.23'
    },
    {
      subject: 'Буття 1-11 глави',
      markEx: '4',
      markHW: '-',
      date: '24.04.23'
    },
    {
      subject: 'Життя Ісуса Христа',
      markEx: '5-',
      markHW: '3',
      date: '24.04.23'
    },
    {
      subject: 'Послання Івана',
      markEx: '4',
      markHW: '5',
      date: '21.08.23'
    },
    {
      subject: 'Біблійна філософія музики',
      markEx: '4',
      markHW: '5',
      date: '21.08.23'
    },
    {
      subject: 'Теологія',
      markEx: '5+',
      markHW: '-',
      date: '06.11.23'
    },
    {
      subject: 'Малі пророки',
      markEx: '4-',
      markHW: '4',
      date: '06.11.23'
    },
    {
      subject: 'Христологія',
      markEx: '5--',
      markHW: '-',
      date: '05.02.24'
    },
    {
      subject: 'Герменевтика',
      markEx: '5-',
      markHW: '-',
      date: '05.02.24'
    },
    {
      subject: 'Послання до Римлян',
      markEx: '4-',
      markHW: '-',
      date: '06.05.24'
    },
    {
      subject: 'Есхатологія',
      markEx: '5-',
      markHW: '-',
      date: '06.05.24'
    },
  ]

  const [quantitySession, setQuantitySession ] = useState(0)
  const [unsubmittedHomeWork, setUnsubmittedHomeWork] = useState(0)

  useEffect(() => {
    setQuantitySession(subjects.length / 2)
  }, [])
  
  useEffect(() => {
    const quantityUnsubmittedHomeWork = subjects.filter(subject => subject.markHW === "-").length
    setUnsubmittedHomeWork(quantityUnsubmittedHomeWork)
  }, [])
    
  return (
    <div id="subjects" className="flex flex-col gap-3 pt-20 px-3">
      <h3 className={clsx(title({ size: 'sm', color: 'blue' }), 'text-center')}>Пройдені предмети</h3>
      <div className="flex gap-3 mt-3 flex-wrap">
      <Chip
        variant="faded"
        color="success"
      >
        Пройдено сесій: {quantitySession}
      </Chip>
      <Chip
        variant="faded"
        color="warning"
      >
        Залишилось сесій: {16 - quantitySession}
      </Chip>
      <Chip
        variant="faded"
        color="danger"
      >
        Не здано Д/З: {unsubmittedHomeWork}
      </Chip>
      </div>
      <Table
        selectionMode="single"
        defaultSelectedKeys={["2"]}
        aria-label="Пройдені предмети"
      >
        <TableHeader>
          <TableColumn className="w-3 text-center">Дата</TableColumn>
          <TableColumn className="w-8/12 text-center">Предмет</TableColumn>
          <TableColumn className="w-2/12 text-center">Екзамен</TableColumn>
          <TableColumn className="w-2/12 text-center">Д/З</TableColumn>
        </TableHeader>
        <TableBody>
          {subjects.map((subject) => (
            <TableRow key={subject.subject}>
            <TableCell>{subject.date}</TableCell>
            <TableCell>{subject.subject}</TableCell>
            <TableCell className="text-center">{subject.markEx}</TableCell>
            <TableCell className="text-center">{subject.markHW}</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
