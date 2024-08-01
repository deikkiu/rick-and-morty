/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			black: '#000',
			white: '#fff',
			green: '#88E23B',
			blue: '#11B0C8',
			bg: '#1E1E20',
			cardBg: '#1A1A1A',
			cardHoverBg: '#313234',
		},
		fontFamily: {
			sans: ['Open Sans', 'sans-serif'],
		},
	},
	plugins: [],
};
