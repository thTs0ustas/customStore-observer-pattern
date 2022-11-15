import { useSyncExternalStore } from 'react';

type Listener = <U>(prev: U) => void;
type Selector<S, U> = (state: S) => U;

const createStore = <T>(initState: T) => {
	let currentState = initState;

	const listeners = new Set<Listener>();

	const subscribe = (listener: Listener) => {
		listeners.add(listener);
		return () => listeners.delete(listener);
	};
	return {
		getState: () => currentState,
		setState: (newState: T) => {
			currentState = newState;
			listeners.forEach((listener) => listener(currentState));
		},
		useStore: <U>(selector: Selector<T, U>): U =>
			useSyncExternalStore(subscribe, () => selector(currentState))
	};
};

const store = createStore({ value1: 0, value2: 0 });

export type State = ReturnType<typeof store.getState>;

export default store;
