export type SiteConfig = typeof siteConfig

export const siteConfig = {
	name: 'Next.js + NextUI',
	description: 'Make beautiful websites regardless of your design experience.',
	navItems: [
		{
			label: 'Бібліотека',
			href: '/dashboard',
		},
		{
			label: 'Календар',
			href: '/calendar',
		},
		{
			label: 'Контакти',
			href: '#contacts',
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
