'use client'

import React from 'react'
import { NavbarUser } from '@/components/navbarUser'
import Student from '@/components/student'
import SubjectTable from '@/components/subjectTable'

export interface PageProps {}

function Page({}: PageProps) {
  return (
    <>
      <NavbarUser />
      <Student />
      <SubjectTable />
    </>
  )
}

export default Page
