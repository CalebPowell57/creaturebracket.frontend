import { configureStore } from '@reduxjs/toolkit'
import bracket from './slices/bracket'
import brackets from './slices/brackets'

export const store = configureStore({
  reducer: {
    bracket: bracket,
    brackets: brackets,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch