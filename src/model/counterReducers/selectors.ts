import { State } from 'src/store';

const itemSelector =
	<I extends keyof State>(item: I) =>
	(state: State) =>
		state[item];

export { itemSelector };
