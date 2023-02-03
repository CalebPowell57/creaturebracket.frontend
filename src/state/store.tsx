import { configureStore } from '@reduxjs/toolkit'
import bracket from './slices/bracket'

export const store = configureStore({
  reducer: {
    bracket: bracket,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch