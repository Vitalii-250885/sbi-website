import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";


export default function SubjectTable() {

  return (
    <div className="flex flex-col gap-3 pt-10 px-3">
      <h3 className="text-center font-bold">Пройдені предмети</h3>
      <Table
        selectionMode="single"
        defaultSelectedKeys={["2"]}
        aria-label="Пройдені предмети"
      >
        <TableHeader>
          <TableColumn className="w-6/12">Предмет</TableColumn>
          <TableColumn className="w-3/12">Оцінка екзамен</TableColumn>
          <TableColumn className="w-3/12">Оцінка Д/З</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Життя та служіння Ісуса Xриста</TableCell>
            <TableCell>5</TableCell>
            <TableCell>5</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Біблійна етика</TableCell>
            <TableCell>5</TableCell>
            <TableCell>5</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Огляд Старого Заповіту</TableCell>
            <TableCell>5</TableCell>
            <TableCell>5</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>Послання до Римлян</TableCell>
            <TableCell>5</TableCell>
            <TableCell>5</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
