const itemSelector =
	<S, I extends keyof S>(item: I) =>
	(state: S) =>
		state[item];

export { itemSelector };
