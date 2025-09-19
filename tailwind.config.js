/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brand: "#d70007",
				support: "#5e5e5e",
			},
		},
	},
	plugins: [],
};
