import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-sans)'],
				mono: ['var(--font-mono)'],
			},
			keyframes: {
				descent: {
					'0%': { opacity: '0', transform: 'translate(0, -50%)' },
					'100%': { opacity: '1', transform: 'translate(0%)' },
				},
				left: {
					'0%': { opacity: '0', transform: 'translate(-50%, 0)' },
					'100%': { opacity: '1', transform: 'translate(0)' },
				},
				right: {
					'0%': { opacity: '0', transform: 'translate(50%, 0)' },
					'100%': { opacity: '1', transform: 'translate(0)' },
				},
				emergence: {
					'0%': { opacity: '0', scale: '0.7' },
					'100%': { opacity: '1', scale: '1' },
				},
			},

			animation: {
				descent: 'descent 300ms ease-in-out',
				left: 'left 200ms ease',
				right: 'right 200ms ease',
				emergence: 'emergence 500ms ease',
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
}
