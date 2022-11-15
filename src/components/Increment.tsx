import { State, useDispatch } from 'src/store';

type Props = { item: keyof State };

const IncrementValue = ({ item }: Props) => {
	const handleClick = () => {
		useDispatch({ type: 'add', payload: item });
	};
	return <button onClick={handleClick}>Increment {item}</button>;
};

export default IncrementValue;
