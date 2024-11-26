import { Accordion, AccordionItem } from '@nextui-org/accordion'
import React from 'react'
import { title } from './primitives'

function Library() {
  return (
    <div id='library' className='pt-20 flex flex-col items-center'>
    <h3 className={title({ size: 'sm', color: 'blue' })}>Бібліотека</h3>
    <Accordion variant="shadow" className='mt-6'>
      <AccordionItem key="1" aria-label="textbook" title="Підручники">
        Конспекти
      </AccordionItem>
      <AccordionItem key="2" aria-label="books" title="Книги">
        Книги
      </AccordionItem>
      <AccordionItem key="3" aria-label="videos" title="Відео-уроки">
        Відео
      </AccordionItem>
    </Accordion>
    </div>
  )
}

export default Library
