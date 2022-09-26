// import { /* useEffect, useState, */  } from 'react';
import './app.css';
import store, { State } from './store';

// const useStore = (selector: (state: State) => number) => {
// 	return useSyncExternalStore(store.subscribe, () =>
// 		selector(store.getState())
// 	);
// 	// const [state, setState] = useState(selector(store.getState()));
// 	// useEffect(() => {
// 	// 	store.subscribe((prev) => setState(selector(prev)));
// 	// }, []);
// 	// return state;
// };

type Props = { item: keyof State };
const IncrementValue = ({ item }: Props) => (
	<button
		onClick={() => {
			const state = store.getState();
			store.setState({ ...state, [item]: state[item] + 1 });
		}}
	>
		Increment {item}
	</button>
);

const ShowValue = ({ item }: Props) => {
	const state = store.useStore((prevState) => prevState[item]);
	console.log(state);

	return <span>{state}</span>;
};

const App = () => (
	<div
		style={{
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			maxWidth: 600,
			gap: '1rem'
		}}
	>
		<IncrementValue item="value1" />
		<ShowValue item="value1" />
		<IncrementValue item="value2" />
		<ShowValue item="value2" />
	</div>
);

export default App;
