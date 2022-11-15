import { Reducer } from 'src/utils/combineReducers';

export const counterReducer: Reducer = (state, action) => {
	if (action.type === 'add') {
		return { ...state, [action.payload]: state[action.payload] + 1 };
	} else return state;
};
