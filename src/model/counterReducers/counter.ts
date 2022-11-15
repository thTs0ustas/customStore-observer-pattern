import { Reducer } from 'src/utils/combineReducers';
// const initState = { value1: 0, value2: 0 };
// eslint-disable-next-line @typescript-eslint/default-param-last
export const counterReducer: Reducer = (state, action) => {
	if (action.type === 'add') {
		return { ...state, [action.payload]: state[action.payload] + 1 };
	} else return state;
};
