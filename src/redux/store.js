import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';
import authSlice from './reducer/authReducer';

// Combine reducers
const rootReducer = combineReducers({
    auth: authSlice
});

// Configure persistor
const persistConfig = {
    key: 'root',
    // storage,
    storage: sessionStorage,
    whitelist: ['auth'] // Persist only the 'auth' reducer state
};

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'] // Ignore redux-persist actions
            }
        });
    }
});

// Create and export persistor
export const persistor = persistStore(store);

export default store;
