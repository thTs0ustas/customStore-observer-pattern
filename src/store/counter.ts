import { BehaviorSubject, combineLatestWith, map } from 'rxjs';

export const subject$ = new BehaviorSubject({ value1: 0, value2: 0 });

export const counter$ = subject$.pipe(
	combineLatestWith(subject$),
	map(([, valueNew]) => valueNew)
);

export type RootState = typeof subject$.value;
