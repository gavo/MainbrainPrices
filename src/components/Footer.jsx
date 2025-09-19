import { motion } from "framer-motion";

const Footer = () => {
	return (
		<footer className="bg-brand text-white py-12 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center"
				>
					<h3 className="text-2xl font-bold mb-4 text-white">
						¿Listo para transformar tu empresa?
					</h3>
					<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
						Únete a cientos de empresas que ya confían en Mainbrain ERP
						para optimizar sus operaciones
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<motion.button
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="cursor-pointer bg-[#1f1f1f] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c10007] transition-colors duration-300 shadow-lg"
						>
							📞 Contactar Ahora
						</motion.button>

						<motion.button
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="cursor-pointer bg-[#1f1f1f] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c10007] transition-colors duration-300 shadow-lg"
						>
							🎯 Solicitar Demo
						</motion.button>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="border-t border-white/20 mt-12 pt-8 text-center text-white/70"
				>
					<p>&copy; 2025 Mainbrain ERP. Todos los derechos reservados.</p>
					<div className="flex justify-center space-x-6 mt-4">
						<a href="#" className="hover:text-white transition-colors">
							Política de Privacidad
						</a>
						<a href="#" className="hover:text-white transition-colors">
							Términos de Servicio
						</a>
						<a href="#" className="hover:text-white transition-colors">
							Soporte
						</a>
					</div>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
