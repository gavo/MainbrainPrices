import { useState } from "react";

const useCalculator = () => {
	const [result, setResult] = useState(null);

	const calculatePlan = (formData) => {
		const {
			cantidadUsuarios,
			computadorasInstalar,
			cantidadOficinas,
			transacciones,
		} = formData;
		const usuarios = parseInt(cantidadUsuarios) || 0;
		const computadoras = parseInt(computadorasInstalar) || 0;
		const oficinas = parseInt(cantidadOficinas) || 0;
		const trans = parseInt(transacciones) || 0;

		// Calcular puntuación total basada en pesos
		const puntuacionTotal =
			trans * 0.1 + usuarios * 2 + oficinas * 50 + computadoras * 25;

		let plan = null;

		// Determinar plan basado en la puntuación total
		if (puntuacionTotal >= 0 && puntuacionTotal < 120) {
			plan = { nombre: "Básico", precio: 350 };
		} else if (puntuacionTotal >= 120 && puntuacionTotal < 250) {
			plan = { nombre: "Pyme", precio: 400 };
		} else if (puntuacionTotal >= 250 && puntuacionTotal < 500) {
			plan = { nombre: "Medium", precio: 500 };
		} else if (puntuacionTotal >= 500 && puntuacionTotal <= 1000) {
			plan = { nombre: "Plus", precio: 750 };
		} else if (puntuacionTotal > 1000) {
			plan = { nombre: "Enterprise", precio: "Precio negociado en oficina" };
		}

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
