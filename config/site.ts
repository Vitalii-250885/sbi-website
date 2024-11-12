export type SiteConfig = typeof siteConfig

export const siteConfig = {
	name: "Слов'янський Баптистський Інститут",
	description: "Сайт Слов'янського Баптистського Інституту",
	navItems: [
		{
			label: 'Бібліотека',
			href: '/dashboard',
		},
		{
			label: 'Календар',
			href: '#calendar',
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
			href: '#calendar',
		},
		{
			label: 'Контакти',
			href: '#contacts',
		},
	],
	links: {},
}
