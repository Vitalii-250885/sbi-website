export type SiteConfig = typeof siteConfig

export const siteConfig = {
	name: 'Next.js + NextUI',
	description: 'Make beautiful websites regardless of your design experience.',
	navItems: [
		{
			label: 'Додому',
			href: '/',
		},
		{
			label: 'Про нас',
			href: '/about',
		},
		{
			label: 'Абітурієнтам',
			href: '/pricing',
		},
		{
			label: 'Контакти',
			href: '/blog',
		},
	],
	navMenuItems: [
		{
			label: 'Увійти',
			href: '/profile',
		},
		{
			label: 'Бібліотека',
			href: '/dashboard',
		},
		{
			label: 'Календар',
			href: '/calendar',
		},
	],
	links: {},
}
