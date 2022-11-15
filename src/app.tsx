import './app.css';
import { State, useDispatch, useSelector } from './store/store';
import { itemSelector } from 'model/counterReducers/selectors';

type Props = { item: keyof State };

const IncrementValue = ({ item }: Props) => {
	const handleClick = () => {
		useDispatch({ type: 'add', payload: item });
	};
	return <button onClick={handleClick}>Increment {item}</button>;
};

const ShowValue = ({ item }: Props) => {
	const state = useSelector(itemSelector(item));
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
