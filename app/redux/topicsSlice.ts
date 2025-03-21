import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Topic, CreateTopicDto } from '../models/Topic';

interface TopicsState {
  topics: Topic[];
  loading: boolean;
  error: string | null;
  sortBy: 'date' | 'popularity';
}

const initialState: TopicsState = {
  topics: [],
  loading: false,
  error: null,
  sortBy: 'date',
};

// Async Thunks
export const fetchTopics = createAsyncThunk('topics/fetchTopics', async () => {
  // TODO: Replace with actual API call
  const response = await Promise.resolve([]);
  return response;
});

export const createTopic = createAsyncThunk(
  'topics/createTopic',
  async (topicData: CreateTopicDto) => {
    // TODO: Replace with actual API call
    const newTopic = {
      ...topicData,
      id: Math.random().toString(),
      authorId: 'user-id', // Replace with actual user ID
      likes: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return newTopic;
  }
);

export const likeTopic = createAsyncThunk(
  'topics/likeTopic',
  async (topicId: string) => {
    // TODO: Replace with actual API call
    return topicId;
  }
);

export const unlikeTopic = createAsyncThunk(
  'topics/unlikeTopic',
  async (topicId: string) => {
    // TODO: Replace with actual API call
    return topicId;
  }
);

export const deleteTopic = createAsyncThunk(
  'topics/deleteTopic',
  async (topicId: string) => {
    // TODO: Replace with actual API call
    return topicId;
  }
);

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    sortTopicsByDate(state) {
      state.sortBy = 'date';
      state.topics.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    },
    sortTopicsByPopularity(state) {
      state.sortBy = 'popularity';
      state.topics.sort((a, b) => b.likes.length - a.likes.length);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopics.fulfilled, (state, action: PayloadAction<Topic[]>) => {
        state.loading = false;
        state.topics = action.payload;
      })
      .addCase(fetchTopics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch topics';
      })
      .addCase(createTopic.fulfilled, (state, action: PayloadAction<Topic>) => {
        state.topics.unshift(action.payload);
      })
      .addCase(likeTopic.fulfilled, (state, action: PayloadAction<string>) => {
        const topic = state.topics.find((t) => t.id === action.payload);
        if (topic) {
          topic.likes.push('user-id'); // Replace with actual user ID
        }
      })
      .addCase(unlikeTopic.fulfilled, (state, action: PayloadAction<string>) => {
        const topic = state.topics.find((t) => t.id === action.payload);
        if (topic) {
          topic.likes = topic.likes.filter((id) => id !== 'user-id'); // Replace with actual user ID
        }
      })
      .addCase(deleteTopic.fulfilled, (state, action: PayloadAction<string>) => {
        state.topics = state.topics.filter((t) => t.id !== action.payload);
      });
  },
});

export const { sortTopicsByDate, sortTopicsByPopularity } = topicsSlice.actions;
export default topicsSlice.reducer;