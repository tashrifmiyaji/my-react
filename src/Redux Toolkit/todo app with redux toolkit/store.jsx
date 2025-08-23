import { configureStore } from "@reduxjs/toolkit";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASKS = "task/fetch";

const initialState = {
	task: [],
};

const taskReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK:
			return { ...state, task: [...state.task, action.payLoad] };

		case DELETE_TASK:
			const updatedTask = state.task.filter((curTask, index) => {
				return index !== action.payLoad;
			});
			return { ...state, task: updatedTask };

		case FETCH_TASKS:
			return { ...state, task: [...action.payLoad] };

		default:
			return state;
	}
};

export const store = configureStore({
	reducer: {
		taskReducer,
	},
});

export const addTask = (task) => {
	return { type: ADD_TASK, payLoad: task };
};

export const deleteTask = (id) => {
	return { type: DELETE_TASK, payLoad: id };
};

export const fetchTask = () => {
	return async (dispatch) => {
		try {
			const res = await fetch(
				"https://jsonplaceholder.typicode.com/todos?_limit=3"
			);
			const task = await res.json();
			console.log(task);
			dispatch({
				type: FETCH_TASKS,
				payLoad: task.map((curTask) => curTask.title),
			});
		} catch (error) {
			console.log("fetchTask function error", error);
		}
	};
};
