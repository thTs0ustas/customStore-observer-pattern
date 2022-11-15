import { State, useSelector } from 'src/store';
import { itemSelector } from 'src/model';

type Props = { item: keyof State };

const ShowValue = ({ item }: Props) => {
	const state = useSelector(itemSelector(item));
	return <span>{state}</span>;
};

export default ShowValue;
