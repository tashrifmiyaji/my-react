const todoLocalStorageKey = "reactTodoKey";

export const setTodoDataToLocalStorage = (todo) => {
	localStorage.setItem(todoLocalStorageKey, JSON.stringify(todo));
};

export const getTodoDataFromLocalStorage = () => {
	const todoData = JSON.parse(localStorage.getItem(todoLocalStorageKey));
	if (!todoData) return [];
	return todoData;
};
