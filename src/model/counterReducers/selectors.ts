import { State } from 'src/store/store';

const itemSelector =
	<I extends keyof State>(item: I) =>
	(state: State) =>
		state[item];

export { itemSelector };
