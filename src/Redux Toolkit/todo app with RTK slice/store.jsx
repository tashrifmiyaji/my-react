import { configureStore, createSlice } from "@reduxjs/toolkit";

const FETCH_TASKS = "task/fetch";

const initialState = {
	task: [],
};

//! RTK slice
const taskReducer = createSlice({
	name: "task",
	initialState,
	reducers: {
		addTask(state, action) {
			state.task.push(action.payload);
		},
		deleteTask(state, action) {
			state.task = state.task.filter((curTask, index) => {
				return index !== action.payload;
			});
		},
		getTask(state, action) {
			state.task.push(...action.payload);
		},
	},
});

export const store = configureStore({
	reducer: {
		taskReducer: taskReducer.reducer,
	},
});

export const fetchTask = () => {
	
	return async (dispatch) => {
		try {
			const res = await fetch(
				"https://jsonplaceholder.typicode.com/todos?_limit=3"
			);
			const task = await res.json();
			dispatch(getTask(task.map((curTask) => curTask.title)));
		} catch (error) {
			console.log("fetchTask function error", error);
		}
	};
};

export const { addTask, deleteTask, getTask } = taskReducer.actions;
