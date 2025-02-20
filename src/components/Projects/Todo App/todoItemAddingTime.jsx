	// todo item adding time
	export const todoItemAddingTime = () => {
		const now = new Date();
		const date = now.toLocaleDateString();
		const time= now.toLocaleTimeString();

		const dateTime = `${date}-${time}`
		return dateTime
	}