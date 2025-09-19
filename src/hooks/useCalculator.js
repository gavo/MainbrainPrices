import { useState } from "react";

const useCalculator = () => {
	const [result, setResult] = useState(null);

	const calculatePlan = (formData) => {
		const { dimension, transacciones } = formData;
		const dim = parseFloat(dimension);
		const trans = parseInt(transacciones);

		// Calcular nivel de desarrollo basado en dimensión y transacciones
		let nivel = "";
		if (dim < 1000 && trans <= 300) {
			nivel = "minimo";
		} else if (dim >= 1000 && dim <= 5000 && trans <= 300) {
			nivel = "basico";
		} else if (dim >= 5000 && dim <= 10000 && trans <= 1500) {
			nivel = "alto";
		} else if (dim >= 10000) {
			nivel = "plus";
		} else {
			nivel = "minimo"; // default
		}

		let plan = null;

		// Lógica de cálculo basada en la nueva tabla
		if (nivel === "minimo" && dim < 1000 && trans <= 300) {
			plan = { nombre: "Básico", precio: 350 };
		} else if (
			nivel === "basico" &&
			dim >= 1000 &&
			dim <= 5000 &&
			trans <= 300
		) {
			plan = { nombre: "Pyme", precio: 400 };
		} else if (
			nivel === "alto" &&
			dim >= 5000 &&
			dim <= 10000 &&
			trans <= 1500
		) {
			plan = { nombre: "Medium", precio: 500 };
		} else if (nivel === "plus" && dim >= 10000 && dim <= 30000) {
			plan = { nombre: "Plus", precio: 750 };
		} else if (nivel === "plus" && dim >= 30000 && dim <= 100000) {
			plan = { nombre: "Max", precio: 1500 };
		} else if (nivel === "plus" && dim > 100000) {
			plan = { nombre: "Super", precio: 2500 };
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
