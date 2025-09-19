import { motion } from "framer-motion";

const Result = ({ plan }) => {
	if (!plan) return null;

	const getPlanDetails = (planName) => {
		const plans = {
			Básico: {
				precio: 350,
				modulos: ["Contabilidad Básica", "Inventario", "Facturación"],
				frecuencia: "Mensual",
			},
			Pyme: {
				precio: 400,
				modulos: [
					"Contabilidad Completa",
					"Inventario Avanzado",
					"Facturación",
					"RRHH Básico",
				],
				frecuencia: "Mensual",
			},
			Medium: {
				precio: 400,
				modulos: [
					"Contabilidad Completa",
					"Inventario Avanzado",
					"Facturación",
					"RRHH Básico",
				],
				frecuencia: "Mensual",
			},
			Plus: {
				precio: 750,
				modulos: [
					"Todos los módulos",
					"Análisis Avanzado",
					"Integraciones",
					"Soporte 24/7",
				],
				frecuencia: "Mensual",
			},
			PlusMax: {
				precio: 1500,
				modulos: [
					"Todos los módulos",
					"Análisis Avanzado",
					"Integraciones",
					"Soporte Premium",
					"Consultoría Personalizada",
					"Implementación Completa",
				],
				frecuencia: "Personalizado",
			},
			PlusSuper: {
				precio: 2500,
				modulos: [
					"Todos los módulos",
					"Análisis Avanzado",
					"Integraciones",
					"Soporte Premium",
					"Consultoría Personalizada",
					"Implementación Completa",
				],
				frecuencia: "Personalizado",
			},
			Enterprise: {
				precio: "Precio negociado en oficina",
				modulos: [
					"Todos los módulos",
					"Análisis Avanzado",
					"Integraciones",
					"Soporte Premium",
					"Consultoría Personalizada",
					"Implementación Completa",
				],
				frecuencia: "Personalizado",
			},
		};
		return plans[planName] || null;
	};

	const planDetails = getPlanDetails(plan.nombre);

	return (
		<motion.section
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
			className="py-20 px-4 bg-white"
		>
			<div className="max-w-2xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="bg-white p-8 rounded-lg shadow-xl text-center border border-support"
				>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="text-6xl mb-4"
					>
						🎉
					</motion.div>

					<h3 className="text-2xl font-bold text-brand mb-2">
						¡Plan Recomendado!
					</h3>

					<div className="bg-gradient-to-r from-brand to-support p-6 rounded-lg mb-6">
						<h4 className="text-3xl font-bold mb-2">{plan.nombre}</h4>
						<p className="text-2xl font-semibold">
							{typeof planDetails?.precio === "string"
								? planDetails.precio
								: `${planDetails?.precio} Bs.`}
						</p>
						<p className="text-sm opacity-90">
							{planDetails?.frecuencia}
						</p>
					</div>

					<div className="text-left">
						<h5 className="text-lg font-semibold text-brand mb-3">
							Módulos Incluidos:
						</h5>
						<ul className="space-y-2">
							{planDetails?.modulos.map((modulo, index) => (
								<motion.li
									key={index}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										duration: 0.5,
										delay: 0.6 + index * 0.1,
									}}
									className="flex items-center text-gray-700"
								>
									<span className="text-brand mr-2">✓</span>
									{modulo}
								</motion.li>
							))}
						</ul>
					</div>

					<motion.button
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 1 }}
						className="mt-8 bg-[#1f1f1f] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c10007] transition-colors duration-300 shadow-lg"
					>
						Contactar para Implementación
					</motion.button>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default Result;
