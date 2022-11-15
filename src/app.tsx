// import { /* useEffect, useState, */  } from 'react';
import './app.css';
import store, { State } from './store/store';
import { itemSelector } from 'model/selectors';

type Props = { item: keyof State };

const IncrementValue = ({ item }: Props) => {
	const handleClick = () => {
		const { getState, setState } = store;
		const state = getState();
		setState({ ...state, [item]: state[item] + 1 });
	};

	return <button onClick={handleClick}>Increment {item}</button>;
};

const ShowValue = ({ item }: Props) => {
	const state = store.useStore(itemSelector(item));
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
