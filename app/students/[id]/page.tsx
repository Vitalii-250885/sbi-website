import React from 'react'

export interface PageProps {
  params: {id: string };
}

function Page({ params }: PageProps) {
  return (
    <div>Student Page ({ params.id })</div>
  )
}

export default Page
