import { useRef } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Calculator from "./components/Calculator";
import Result from "./components/Result";
import Footer from "./components/Footer";
import useCalculator from "./hooks/useCalculator";

function App() {
	const calculatorRef = useRef(null);
	const { result, calculatePlan } = useCalculator();

	const scrollToCalculator = () => {
		calculatorRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const handleCalculate = (formData) => {
		calculatePlan(formData);
		// Scroll to result after calculation
		setTimeout(() => {
			const resultElement = document.getElementById("result");
			resultElement?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	};

	return (
		<div className="min-h-screen bg-[#3f3f3f]">
			<Hero onScrollToCalculator={scrollToCalculator} />
			<Features />
			<div ref={calculatorRef}>
				<Calculator onCalculate={handleCalculate} />
			</div>
			<div id="result">
				<Result plan={result} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
