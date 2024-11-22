import React from 'react'
import { NavbarUser } from '@/components/navbarUser'
import Student from '@/components/student'

export interface PageProps {}

function Page({}: PageProps) {
  return (
    <>
      <NavbarUser />
      <Student />
    </>
  )
}

export default Page
