import { useSyncExternalStore } from 'react';
import { counterReducer } from '../model';

type Listener = <U>(prev: U) => void;
type Selector<S, U> = (state: S) => U;
export interface Action {
	type: string;
}

export interface AnyAction extends Action {
	[extraProps: string]: any;
}

const createStore = <T>(initState: T) => {
	let currentState = initState;

	const listeners = new Set<Listener>();

	const subscribe = (listener: Listener) => {
		listeners.add(listener);
		return () => listeners.delete(listener);
	};

	const setState = (action: AnyAction) => {
		// @ts-ignore
		currentState = counterReducer(currentState, action);
		console.log(currentState);
		listeners.forEach((listener) => listener(currentState));
	};

	return {
		getState: () => currentState,
		useSelector: <U>(selector: Selector<T, U>): U =>
			useSyncExternalStore(subscribe, () => selector(currentState)),
		useDispatch: (action: AnyAction) => {
			setState(action);
		},
		setState
	};
};

const store = createStore({ value1: 0, value2: 0 });
export const { useSelector, useDispatch } = store;
export type State = ReturnType<typeof store.getState>;
