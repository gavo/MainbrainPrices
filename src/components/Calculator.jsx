import { useState } from "react";
import { motion } from "framer-motion";

const Calculator = ({ onCalculate }) => {
	const [formData, setFormData] = useState({
		cantidadUsuarios: "",
		computadorasInstalar: "",
		cantidadOficinas: "",
		ventas: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			formData.cantidadUsuarios &&
			formData.computadorasInstalar &&
			formData.cantidadOficinas &&
			formData.ventas
		) {
			onCalculate(formData);
		}
	};

	return (
		<section id="calculator" className="py-20 px-4 bg-white">
			<div className="max-w-2xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
						Calcula Tu Plan Ideal
					</h2>
					<p className="text-xl text-gray-700">
						Ingresa los datos de tu empresa para obtener el plan
						recomendado
					</p>
				</motion.div>

				<motion.form
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					onSubmit={handleSubmit}
					className="bg-white p-8 rounded-lg shadow-lg border border-support"
				>
					<div className="mb-6">
						<label
							htmlFor="cantidadUsuarios"
							className="block text-sm font-medium text-brand mb-2"
						>
							Cantidad de Usuarios
						</label>
						<input
							type="number"
							id="cantidadUsuarios"
							name="cantidadUsuarios"
							value={formData.cantidadUsuarios}
							onChange={handleInputChange}
							placeholder="Ej: 5"
							className="w-full px-4 py-3 border border-support rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
							min="0"
							required
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="computadorasInstalar"
							className="block text-sm font-medium text-brand mb-2"
						>
							Computadoras a Instalar
						</label>
						<input
							type="number"
							id="computadorasInstalar"
							name="computadorasInstalar"
							value={formData.computadorasInstalar}
							onChange={handleInputChange}
							placeholder="Ej: 10"
							className="w-full px-4 py-3 border border-support rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
							min="0"
							required
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="cantidadOficinas"
							className="block text-sm font-medium text-brand mb-2"
						>
							Cantidad de Oficinas
						</label>
						<input
							type="number"
							id="cantidadOficinas"
							name="cantidadOficinas"
							value={formData.cantidadOficinas}
							onChange={handleInputChange}
							placeholder="Ej: 3"
							className="w-full px-4 py-3 border border-support rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
							min="0"
							required
						/>
					</div>

					<div className="mb-8">
						<label
							htmlFor="ventas"
							className="block text-sm font-medium text-brand mb-2"
						>
							Cantidad de ventas al Dia en promedio
						</label>
						<input
							type="number"
							id="ventas"
							name="ventas"
							value={formData.ventas}
							onChange={handleInputChange}
							placeholder="Ej: 1500"
							className="w-full px-4 py-3 border border-support rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
							min="0"
							required
						/>
					</div>

					<button
						type="submit"
						className="w-full cursor-pointer bg-[#1f1f1f] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#c10007] transition-colors duration-300 shadow-lg"
					>
						Calcular Plan
					</button>
				</motion.form>
			</div>
		</section>
	);
};

export default Calculator;
