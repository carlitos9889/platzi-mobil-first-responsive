/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			custom: ["DM Sans"],
		},
		colors: {
			bitcoinorange: "#f7931a",
			softorange: "#ffe9d5",
			secondaryblue: "#1a9af7",
			softblue: "#e7f5ff",
			warmblack: "#282623",
			black: "#201e1c",
			grey: "#bababa",
			offwhite: "#faf8f7",
			justwhite: "#fff",
		},
		extend: {
			backgroundImage: {
				logo: "url('/assets/img/bitcoinbaby2x.png')",
			},
		},
	},
	plugins: [],
};
