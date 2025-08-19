import { createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

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

		default:
			return state;
	}
};

export const store = createStore(taskReducer, composeWithDevTools());

export const addTask = (task) => {
	return { type: ADD_TASK, payLoad: task };
};

export const deleteTask = (id) => {
	return { type: DELETE_TASK, payLoad: id };
};

