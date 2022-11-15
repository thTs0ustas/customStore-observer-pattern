import { AnyAction } from 'src/store/store';

type Reducer<S, A extends AnyAction> = (state: S, action: A) => S;

export const counterReducer: Reducer<any, AnyAction> = (state, action) => {
	if (action.type === 'add') {
		return { ...state, [action.payload]: state[action.payload] + 1 };
	} else return state;
};
