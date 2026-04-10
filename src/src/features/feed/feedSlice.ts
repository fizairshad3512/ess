import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_POSTS } from '../../data/constants';
import type { FeedPost } from '../../types';

interface FeedState {
  posts: FeedPost[];
}

const initialState: FeedState = {
  posts: INITIAL_POSTS,
};

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<FeedPost>) => {
      state.posts.unshift(action.payload);
    },
    toggleLike: (state, action: PayloadAction<string>) => {
      const post = state.posts.find((p) => p.id === action.payload);
      if (post) {
        post.liked = !post.liked;
        post.likes += post.liked ? 1 : -1;
      }
    },
  },
});

export const { addPost, toggleLike } = feedSlice.actions;
export default feedSlice.reducer;
