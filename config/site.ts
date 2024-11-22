export type SiteConfig = typeof siteConfig

export const siteConfig = {
	name: "Слов'янський Баптистський Інститут",
	description: "Сайт Слов'янського Баптистського Інституту",
	navItems: [
		{
			label: 'Наступна сесія',
			href: '#nextSession',
		},
		{
			label: 'Контакти',
			href: '#contacts',
		},
	],
	navMenuItems: [
		{
			label: 'Наступна сесія',
			href: '#nextSession',
		},
		{
			label: 'Контакти',
			href: '#contacts',
		},
	],
	navUserItems: [
		{
			label: 'На головну сторінку',
			href: '/',
		},
		{
			label: 'Пройдені предмети',
			href: '#',
		},
		{
			label: 'Бібліотека',
			href: '#',
		},
	],
	navMenuUserItems: [
		{
			label: 'На головну сторінку',
			href: '/',
		},
		{
			label: 'Пройдені предмети',
			href: '#',
		},
		{
			label: 'Бібліотека',
			href: '#',
		},
	],

	links: {},
}
