const config = {
	darkMode: "class",
	content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			colors: {
				primary: '#f97316',
				mahakumbh: '#7c2d12',
				cream: {
					50: '#fef5e7',
				},
			},
			borderRadius: {
				'2xl': '1rem',
				'3xl': '1.5rem',
			},
			boxShadow: {
				soft: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
				'soft-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
			},
		}
	},
	plugins: [],
}

export default config;
