import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/types/StateSchema';
import { counterReducer } from 'entities/Counter';

export function createReduxStore(initialStore?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialStore,
    });
}
