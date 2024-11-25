import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";


export default function SubjectTable() {
  const subjects = [
    {
      subject: 'Огляд Нового Заповіту',
      markEx: '5-',
      markHW: 'Чудово/Чудово',
      date: '24.08.2020'
    },
    {
      subject: 'Послання до Євреїв',
      markEx: '4',
      markHW: 'Чудово',
      date: '24.08.2020'
    },
    {
      subject: 'Послання до Єфесян',
      markEx: '5-',
      markHW: 'Чудово',
      date: '25.01.2021'
    },
    {
      subject: 'Царі Юдеї і Ізраілю',
      markEx: '5',
      markHW: 'Чудово',
      date: '25.01.2021'
    },
    {
      subject: 'Поезія мудрості',
      markEx: '5--',
      markHW: 'Не здане',
      date: '10.05.2021'
    },
    {
      subject: 'Перше послання до Коринтян',
      markEx: '4-',
      markHW: 'Не здане',
      date: '10.05.2021'
    },
    {
      subject: 'Біблійна етика',
      markEx: '5+',
      markHW: 'Не здане',
      date: '23.08.2021'
    },
    {
      subject: 'Бібліологія',
      markEx: '5',
      markHW: 'Чудово',
      date: '23.08.2021'
    },
    {
      subject: 'Сотеріологія',
      markEx: '5',
      markHW: 'Чудово/Чудово',
      date: '15.11.2021'
    },
    {
      subject: 'Світові релігії',
      markEx: '5-',
      markHW: 'Не здане',
      date: '15.11.2021'
    },
    {
      subject: 'Особистість і служіння Духа Святого',
      markEx: '5+',
      markHW: 'Не здане',
      date: '24.01.2022'
    },
    {
      subject: 'Книга пророка Ісаї',
      markEx: '5+',
      markHW: 'Не здане',
      date: '24.01.2022'
    },
    {
      subject: 'Особистий євангелізм',
      markEx: '4-',
      markHW: 'Не здане',
      date: '30.01.2023'
    },
    {
      subject: 'Перше та друге послання до Тимофія',
      markEx: '5',
      markHW: 'Не здане',
      date: '30.01.2023'
    },
    {
      subject: 'Буття 1-11 глави',
      markEx: '4',
      markHW: 'Не здане',
      date: '24.04.2023'
    },
    {
      subject: 'Життя Ісуса Христа',
      markEx: '5-',
      markHW: 'Зараховано',
      date: '24.04.2023'
    },
    {
      subject: 'Послання Івана',
      markEx: '4',
      markHW: 'Чудово',
      date: '21.08.2023'
    },
    {
      subject: 'Біблійна філософія музики',
      markEx: '4',
      markHW: 'Чудово',
      date: '21.08.2023'
    },
    {
      subject: 'Теологія',
      markEx: '5+',
      markHW: 'Не здане',
      date: '06.11.2023'
    },
    {
      subject: 'Малі пророки',
      markEx: '4-',
      markHW: 'Добре',
      date: '06.11.2023'
    },
    {
      subject: 'Христологія',
      markEx: '5--',
      markHW: 'Не здане',
      date: '05.02.2024'
    },
    {
      subject: 'Герменевтика',
      markEx: '5-',
      markHW: 'Не здане',
      date: '05.02.2024'
    },
    {
      subject: 'Послання до Римлян',
      markEx: '4-',
      markHW: 'Не здане',
      date: '06.05.2024'
    },
    {
      subject: 'Есхатологія',
      markEx: '5-',
      markHW: 'Не здане',
      date: '06.05.2024'
    },
  ]

  return (
    <div className="flex flex-col gap-3 pt-10 px-3">
      <h3 className="text-center font-bold">Пройдені предмети</h3>
      <Table
        selectionMode="single"
        defaultSelectedKeys={["2"]}
        aria-label="Пройдені предмети"
      >
        <TableHeader>
          <TableColumn className="w-2/12">Дата</TableColumn>
          <TableColumn className="w-6/12">Предмет</TableColumn>
          <TableColumn className="w-2/12">Оцінка екзамен</TableColumn>
          <TableColumn className="w-2/12">Оцінка Д/З</TableColumn>
        </TableHeader>
        <TableBody>
          {subjects.map(subject => (
            <TableRow key={subject.subject}>
            <TableCell>{subject.date}</TableCell>
            <TableCell>{subject.subject}</TableCell>
            <TableCell>{subject.markEx}</TableCell>
            <TableCell>{subject.markHW}</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
