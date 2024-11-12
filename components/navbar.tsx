'use client'

import {
	Navbar as NextUINavbar,
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

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const toggleMenu = () => setIsOpen(!isOpen)
	const closeMenu = () => setIsOpen(false)

	return (
		<NextUINavbar
			isMenuOpen={isOpen}
			onMenuOpenChange={toggleMenu}
			maxWidth='xl'
			className='fixed top-0 left-0 animate-emergence'>
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
					{siteConfig.navItems.map(item => (
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

			<NavbarContent className='flex w-full' justify='end'>
				<NavbarItem className='flex gap-2'>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem>
					<Button
						className='text-sm font-normal text-default-600 bg-default-100'
						startContent='сюда можно вставить icon'
						variant='flat'>
						Увійти
					</Button>
				</NavbarItem>
				<NavbarContent className='sm:hidden' justify='end'>
					<NavbarMenuToggle />
				</NavbarContent>
			</NavbarContent>

			<NavbarMenu>
				<div className='mx-4 mt-2 flex flex-col gap-2'>
					{siteConfig.navMenuItems.map((item, index) => (
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
		</NextUINavbar>
	)
}
