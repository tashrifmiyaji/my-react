import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// for redux
// import '../src/redux/store.jsx'
import { Provider } from "react-redux";
import { store } from "./redux/store2.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
