import { createContext, useState, use, useEffect } from "react";


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");

	const handleToggleBtn = () => {
		return setTheme((prevTheme) =>
			prevTheme === "dark" ? "light" : "dark"
		);

	};

	return (
		<ThemeContext.Provider value={{ theme, handleToggleBtn }}>
			{children}
		</ThemeContext.Provider>
	);
};

// creating a component
export const DarkAndLightMode = () => {
    const { theme, handleToggleBtn} = use(ThemeContext)

    useEffect( ()=> {
        document.body.style.backgroundColor = theme === "dark" ?  "#1a202c" : "#f7fafc"; // dark: navy, light: light gray
        document.body.style.color = theme === "dark" ?  "#f7fafc" : "#1a202c"; // light: light gray, dark: navy
    }, [theme])

	return (
		<>
			<div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
				<h1>Hello</h1>
				<h2>Dark And Light Mood website</h2>
				<button type="button" className="bg-violet-600 hover:bg-violet-900 text-white rounded-sm ring-2 mt-4 p-4" onClick={handleToggleBtn}>
					{theme === "dark"? "switch to light mode" : "switch to dark mode"}
				</button>
			</div>
		</>
	);
};
