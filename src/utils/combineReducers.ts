import { Action, AnyAction } from 'src/store/store';
//
// declare const $CombinedState: unique symbol;
// interface EmptyObject {
// 	readonly [$CombinedState]?: undefined;
// }
// export type CombinedState<S> = EmptyObject & S;
//
export type Reducer<S = any, A extends Action = AnyAction> = (
	state: S | undefined,
	action: A
) => S;
//
// export type ReducersMapObject<S = any, A extends Action = AnyAction> = {
// 	[K in keyof S]: Reducer<S[K], A>;
// };
// export type StateFromReducersMapObject<M> = M extends ReducersMapObject
// 	? { [P in keyof M]: M[P] extends Reducer<infer S, any> ? S : never }
// 	: never;
// export type ReducerFromReducersMapObject<M> = M extends {
// 	[P in keyof M]: infer R;
// }
// 	? R extends Reducer<any, any>
// 		? R
// 		: never
// 	: never;
// export type ActionFromReducer<R> = R extends Reducer<any, infer A> ? A : never;
// export type ActionFromReducersMapObject<M> = M extends ReducersMapObject
// 	? ActionFromReducer<ReducerFromReducersMapObject<M>>
// 	: never;
//
// export default function combineReducers<S>(
// 	reducers: ReducersMapObject<S, any>
// ): Reducer<CombinedState<S>>;
// export default function combineReducers<S, A extends Action = AnyAction>(
// 	reducers: ReducersMapObject<S, A>
// ): Reducer<CombinedState<S>, A>;
// export default function combineReducers<M extends ReducersMapObject>(
// 	reducers: M
// ): Reducer<
// 	CombinedState<StateFromReducersMapObject<M>>,
// 	ActionFromReducersMapObject<M>
// >;
// export default function combineReducers(reducers: ReducersMapObject) {
// 	return (
// 		// eslint-disable-next-line @typescript-eslint/default-param-last
// 		state: StateFromReducersMapObject<typeof reducers> = {},
// 		action: AnyAction
// 	) =>
// 		Object.entries(reducers).reduce((finalState, [n, r]) => {
// 			finalState[n] = r(state[n], action);
// 			return finalState;
// 		}, state);
// }
