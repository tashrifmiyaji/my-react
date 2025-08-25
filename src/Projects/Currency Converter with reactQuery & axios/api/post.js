import axios from "axios";

const api = axios.create({
	baseURL: "https://open.er-api.com/v6",
});

export const getConvertedAmount = async (fromCurrency) => {
	const res = await api.get(`/latest/${fromCurrency}`);
	return res.data.rates;
};
