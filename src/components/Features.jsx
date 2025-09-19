import { motion } from "framer-motion";

const Features = () => {
	const features = [
		{
			icon: "📊",
			title: "Gestión Integral",
			description:
				"Controla todos los aspectos de tu empresa desde una sola plataforma",
		},
		{
			icon: "💰",
			title: "Optimización Financiera",
			description:
				"Mejora la eficiencia financiera con reportes automatizados",
		},
		{
			icon: "🚀",
			title: "Escalabilidad",
			description:
				"Crece tu negocio sin límites con nuestra arquitectura flexible",
		},
		{
			icon: "🔒",
			title: "Seguridad Avanzada",
			description:
				"Protege tus datos con los más altos estándares de seguridad",
		},
		{
			icon: "📱",
			title: "Acceso Móvil",
			description:
				"Gestiona tu empresa desde cualquier lugar con nuestra app móvil",
		},
		{
			icon: "🤖",
			title: "Automatización",
			description:
				"Reduce tareas manuales con procesos automatizados inteligentes",
		},
	];

	return (
		<section className="py-20 px-4 bg-white">
			<div className="max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
						¿Por qué elegir Mainbrain ERP?
					</h2>
					<p className="text-xl text-gray-700 max-w-2xl mx-auto">
						Descubre las ventajas que harán que tu empresa sea más
						eficiente y competitiva
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-support"
						>
							<div className="text-4xl mb-4">{feature.icon}</div>
							<h3 className="text-xl font-semibold text-brand mb-2">
								{feature.title}
							</h3>
							<p className="text-gray-700">{feature.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
