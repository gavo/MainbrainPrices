import { useState } from "react";

const useCalculator = () => {
	const [result, setResult] = useState(null);

	const calculatePlan = (formData) => {
		const {
			cantidadUsuarios,
			computadorasInstalar,
			cantidadOficinas,
			ventas,
		} = formData;
		const usuarios = parseInt(cantidadUsuarios) || 0;
		const computadoras = parseInt(computadorasInstalar) || 0;
		const oficinas = parseInt(cantidadOficinas) || 0;
		const ventasParsed = parseInt(ventas) || 0;
		const promVentas =
			ventasParsed *
			(computadoras <= 2
				? 1
				: computadoras <= 4
				? 0.9
				: computadoras <= 8
				? 0.8
				: 0.7);

		// Calcular puntuación total basada en pesos
		const puntuacionTotal =
			promVentas * 0.5 + usuarios * 2 + oficinas * 50 + computadoras * 25;

		let plan = null;

		// Determinar plan basado en la puntuación total
		if (puntuacionTotal >= 0 && puntuacionTotal < 125) {
			plan = { nombre: "Básico", precio: 350 };
		} else if (puntuacionTotal >= 125 && puntuacionTotal < 240) {
			plan = { nombre: "Pyme", precio: 400 };
		} else if (puntuacionTotal >= 240 && puntuacionTotal < 520) {
			plan = { nombre: "Medium", precio: 500 };
		} else if (puntuacionTotal >= 520 && puntuacionTotal <= 760) {
			plan = { nombre: "Plus", precio: 750 };
		} else if (puntuacionTotal > 760 && puntuacionTotal <= 980) {
			plan = { nombre: "PlusMax", precio: 1500 };
		} else if (puntuacionTotal > 980 && puntuacionTotal <= 1200) {
			plan = { nombre: "PlusSuper", precio: 2500 };
		} else if (puntuacionTotal > 1200) {
			plan = { nombre: "Enterprise", precio: "Negociado" };
		}

		console.log(formData);
		console.log(puntuacionTotal);

		// Si no coincide con ningún plan, asignar por defecto Básico
		if (!plan) {
			plan = { nombre: "Básico", precio: 350 };
		}

		setResult(plan);
		return plan;
	};

	const clearResult = () => {
		setResult(null);
	};

	return {
		result,
		calculatePlan,
		clearResult,
	};
};

export default useCalculator;
