module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [
		{
			pattern: /col-span-(1|2)/,
			variants: ['sm']
		}
	],
	theme: {
		extend: {
			colors: {
				primary: '#76a2a2',
				support: '#f2daab'
			}
		}
	},
	plugins: []
};
