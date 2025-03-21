import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Post, CreatePostDto } from '../models/Post';

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

// Async Thunks
export const fetchPostsByTopic = createAsyncThunk(
  'posts/fetchPostsByTopic',
  async (topicId: string) => {
    // TODO: Replace with actual API call
    const response = await Promise.resolve([]);
    return response;
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (postData: CreatePostDto) => {
    // TODO: Replace with actual API call
    const newPost = {
      ...postData,
      id: Math.random().toString(),
      authorId: 'user-id', // Replace with actual user ID
      likes: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return newPost;
  }
);

export const likePost = createAsyncThunk(
  'posts/likePost',
  async (postId: string) => {
    // TODO: Replace with actual API call
    return postId;
  }
);

export const unlikePost = createAsyncThunk(
  'posts/unlikePost',
  async (postId: string) => {
    // TODO: Replace with actual API call
    return postId;
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (postId: string) => {
    // TODO: Replace with actual API call
    return postId;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsByTopic.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostsByTopic.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPostsByTopic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch posts';
      })
      .addCase(createPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.posts.unshift(action.payload);
      })
      .addCase(likePost.fulfilled, (state, action: PayloadAction<string>) => {
        const post = state.posts.find((p) => p.id === action.payload);
        if (post) {
          post.likes.push('user-id'); // Replace with actual user ID
        }
      })
      .addCase(unlikePost.fulfilled, (state, action: PayloadAction<string>) => {
        const post = state.posts.find((p) => p.id === action.payload);
        if (post) {
          post.likes = post.likes.filter((id) => id !== 'user-id'); // Replace with actual user ID
        }
      })
      .addCase(deletePost.fulfilled, (state, action: PayloadAction<string>) => {
        state.posts = state.posts.filter((p) => p.id !== action.payload);
      });
  },
});

export default postsSlice.reducer;