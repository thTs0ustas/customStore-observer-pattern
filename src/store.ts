// import React from 'react';

import { useSyncExternalStore } from 'react';

type Listener = <U>(prev: U) => void;

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
		subscribe: (listener: Listener) => {
			listeners.add(listener);
			return () => listeners.delete(listener);
		},
		useStore: <U>(selector: (state: T) => U): U => {
			return useSyncExternalStore(subscribe, () => selector(currentState));
		}
	};
};

const store = createStore({ value1: 0, value2: 0 });

export type State = ReturnType<typeof store.getState>;

export default store;
