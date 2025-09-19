import { motion } from "framer-motion";
import logo from "../assets/logo-dark.png";

const Hero = ({ onScrollToCalculator }) => {
	return (
		<section className="bg-gradient-to-br from-brand to-support text-white py-20 px-4">
			<div className="max-w-4xl mx-auto text-center">
				<motion.img
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					src={logo}
					alt="Logo"
					className="h-32 md:max-h-[400px] w-auto mb-6 mx-auto block"
				/>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-xl md:text-2xl mb-8 text-white"
				>
					Calcula el plan de licenciamiento perfecto para tu empresa
				</motion.p>
				<motion.button
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					onClick={onScrollToCalculator}
					className="bg-[#1f1f1f] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c10007] transition-colors duration-300 shadow-lg"
				>
					Calcular Mi Plan
				</motion.button>
			</div>
		</section>
	);
};

export default Hero;
