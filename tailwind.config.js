/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
	  extend: {
		backgroundImage: {
			'graph': "url('/graph.svg')",

		  }
	  }
	},
	plugins: []
  };