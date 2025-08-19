// external import
import { createStore } from "redux";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

// initial state
const initialState = {
	task1: [],
	task2: [],
};

// step 1 create a simple reducer function
const taskReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK:
			return {
				...state,
				task1: [...state.task1, action.payLoad.data],
			};

		case DELETE_TASK:
			const updatedTask = state.task1.filter(
				(curTask, index) => index !== action.payLoad.id
			);
			return {
				...state,
				task1: updatedTask,
			};

		default:
			return state;
	}
};

// step 2 create the redux store using the reducer
const store = createStore(taskReducer);
console.log(store);

// step 2 log the initial state.
// the getState method is a synchronous function that returns the current state of a Redux application. It includes the entire state of the application, including all the reducers and their respective states.
console.log("initial state log1", store.getState());

// step 3 Dispatch an action to add a task.
store.dispatch({
	type: ADD_TASK,
	payLoad: { data: "I have to get up at 5 am." },
});
console.log("added a task log2", store.getState());

// step 3 Dispatch an action to add a task.
store.dispatch({
	type: ADD_TASK,
	payLoad: { data: "I have to sleep at 10 pm." },
});
console.log("added a task log2", store.getState());

// step 3 Dispatch an action to delete a task.
store.dispatch({ type: DELETE_TASK, payLoad: { id: 1 } });
console.log("delete a task log4", store.getState());

//
//
// step 4 create action creator.
const taskCreator = (task) => {
	return { type: task.type, payLoad: task.payLoad };
};

store.dispatch(
	taskCreator({
		type: ADD_TASK,
		payLoad: { data: "i have to pray fajar salat at dawn." },
	})
);
//
console.log("added a task log5", store.getState());

//
store.dispatch(taskCreator({ type: DELETE_TASK, payLoad: { id: 0 } }));
console.log("delete a task log6", store.getState());
