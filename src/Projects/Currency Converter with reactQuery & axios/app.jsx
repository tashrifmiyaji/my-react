import "./index.css";
import { useState } from "react";
import { getConvertedAmount } from "./api/post";
import { currency } from "./api/currency.js";
import { useQuery } from "@tanstack/react-query";

export const App = () => {
	const [amount, setAmount] = useState(0); // Amount to convert
	const [fromCurrency, setFromCurrency] = useState(currency["United States"]); // Base currency
	const [toCurrency, setToCurrency] = useState(currency.Bangladesh); // Target currency
	const [convertedAmount, setConvertedAmount] = useState(null); // Converted value
	const [displayAmount, setDisplayAmount] = useState(null);

	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ["currencyConverter"],
		queryFn: () => getConvertedAmount(fromCurrency),
		enabled: false,
	});

	const handleConvertCurrency = async () => {
		refetch();
		const convertedValue = data[toCurrency] * amount;
		setConvertedAmount(convertedValue);
		setDisplayAmount(amount);
	};

	return (
		<>
			<section className="currency-converter">
				<div className="currency-div">
					<h1>Currency Converter</h1>
					<div>
						<label htmlFor="currency_amount">
							Amount:
							<input
								type="number"
								id="currency_amount"
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
							/>
						</label>
					</div>

					<div className="currency-selector">
						<div>
							<label>
								<span>From:</span>
								<select
									value={fromCurrency}
									onChange={(e) =>
										setFromCurrency(e.target.value)
									}
								>
									{Object.keys(currency).map(
										(curC, index) => {
											return (
												<option
													key={index}
													value={currency[curC]}
												>
													{curC}
												</option>
											);
										}
									)}
								</select>
							</label>
						</div>
						<div>
							<label>
								<span>To:</span>
								<select
									value={toCurrency}
									onChange={(e) =>
										setToCurrency(e.target.value)
									}
								>
									{Object.keys(currency).map(
										(curC, index) => {
											return (
												<option
													key={index}
													value={currency[curC]}
												>
													{curC}
												</option>
											);
										}
									)}
								</select>
							</label>
						</div>
					</div>

					<button
						disabled={isLoading || amount <= 0}
						onClick={handleConvertCurrency}
					>
						{isLoading ? "converting..." : "convert"}
					</button>

					<hr />
					{convertedAmount && (
						<div>
							<h2>
								{displayAmount} {fromCurrency} ={" "}
								{convertedAmount.toFixed(2)} {toCurrency}
							</h2>
						</div>
					)}

					{error && <p>{error}</p>}
				</div>
			</section>
		</>
	);
};
