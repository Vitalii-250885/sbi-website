'use client'

import {
	Navbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { link as linkStyles } from '@nextui-org/theme'
import NextLink from 'next/link'
import clsx from 'clsx'

import { siteConfig } from '@/config/site'
import { ThemeSwitch } from '@/components/theme-switch'
import { Logo } from '@/components/icons'
import React, { useState } from 'react'
import ModalLogIn from './modalLogIn'

export const NavbarUser = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
	const closeMenu = () => setIsMenuOpen(false)

	return (
		<Navbar
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={toggleMenu}
			maxWidth='xl'
			className='fixed top-0 left-0 animate-emergence z-20'>
			<NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
				<NavbarBrand as='li' className='gap-3 max-w-fit'>
					<Link
						className='flex w-12 justify-start items-center gap-1'
						href='#'
						onClick={closeMenu}>
						<Logo width={12} className='animate-emergence' />
					</Link>
				</NavbarBrand>

				<ul className='hidden sm:flex gap-4 justify-start ml-2'>
					{siteConfig.navUserItems.map(item => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: 'foreground' }),
									'data-[active=true]:text-primary data-[active=true]:font-medium'
								)}
								color='foreground'
								href={item.href}>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent justify='end'>
				<ThemeSwitch />
				<NavbarMenuToggle className='sm:hidden' />
			</NavbarContent>

			<NavbarMenu>
				<div className='mx-4 mt-2 flex flex-col gap-2'>
					{siteConfig.navMenuUserItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								onClick={closeMenu}
								color={
									index === 2
										? 'primary'
										: index === siteConfig.navMenuItems.length - 1
											? 'danger'
											: 'foreground'
								}
								href={item.href}
								size='lg'>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</Navbar>
	)
}
