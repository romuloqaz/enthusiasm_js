import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducer = persistReducer({
        key: 'todoApp',
        storage,
        whitelist: ['session'],
    }, reducers);
    return persistedReducer;
}