import axios from "axios";

const api = axios.create({
	baseURL:
		"https://open.er-api.com",
});

export const getConvertedAmount = (fromCurrency) => {
	return api.get(`/v6/latest/${fromCurrency}`);
};
