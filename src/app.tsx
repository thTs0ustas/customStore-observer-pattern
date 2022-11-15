import './app.css';
import { counter$, RootState, subject$ } from 'src/store/counter';
import { useEffect, useState } from 'react';

type Props = { item: 'value1' | 'value2' };

const IncrementValue = ({ item }: Props) => {
	return (
		<button
			onClick={() =>
				subject$.next({
					...subject$.value,
					[item]: subject$.value[item] + +item.at(-1)!
				})
			}
		>
			Increment {item}
		</button>
	);
};

const ShowValue = ({ item }: Props) => {
	const [counter, setCounter] = useState({} as RootState);
	useEffect(() => {
		const sub = counter$.subscribe(setCounter);
		return () => sub.unsubscribe();
	}, []);

	return <span>{counter[item]}</span>;
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
