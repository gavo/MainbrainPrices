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

		// Calcular puntuación total basada en pesos
		const puntuacionTotal =
			ventasParsed * 0.5 + // Importacia Ventas
			usuarios * 2 + // Importancia Usuarios
			oficinas * 50 + // Importancia Oficinas
			computadoras * 25; // Importancia Computadoras

		let plan = null;

		// Determinar plan basado en la puntuación total
		if (puntuacionTotal >= 0 && puntuacionTotal <= 125) {
			plan = { nombre: "Básico", precio: 350 };
		} else if (puntuacionTotal > 125 && puntuacionTotal <= 250) {
			plan = { nombre: "Pyme", precio: 400 };
		} else if (puntuacionTotal > 250 && puntuacionTotal <= 500) {
			plan = { nombre: "Medium", precio: 500 };
		} else if (puntuacionTotal > 500 && puntuacionTotal <= 1000) {
			plan = { nombre: "Plus", precio: 750 };
		} else if (puntuacionTotal > 1000 && puntuacionTotal <= 1500) {
			plan = { nombre: "PlusMax", precio: 1500 };
		} else if (puntuacionTotal > 1500 && puntuacionTotal <= 2000) {
			plan = { nombre: "PlusSuper", precio: 2500 };
		} else if (puntuacionTotal > 2000) {
			plan = { nombre: "Enterprise", precio: "Negociado" };
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
