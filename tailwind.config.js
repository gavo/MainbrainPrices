/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brand: "#b33737",
				support: "#9e9e9e",
			},
		},
	},
	plugins: [],
};
