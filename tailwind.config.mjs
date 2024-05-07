import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#bdd1a1', 600: '#587800', 900: '#283900', 950: '#1c2900' };
const gray = { 100: '#f7f6f4', 200: '#efeeea', 300: '#c3c2bd', 400: '#8e8b83', 500: '#5b5850', 700: '#3b3831', 800: '#292720', 900: '#191815' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};