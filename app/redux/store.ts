import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import topicsReducer from './topicsSlice';
import postsReducer from './postsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    topics: topicsReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;