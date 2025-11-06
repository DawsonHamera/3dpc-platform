import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthState, User } from './authTypes';
import { RootState } from '../../redux/store';

const storedAuth = localStorage.getItem('auth');
const initialState: AuthState = storedAuth ? JSON.parse(storedAuth) : { user: null, access_token: null, stream_token: null };

const slice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, access_token, stream_token },
      }: PayloadAction<{ user: User; access_token: string, stream_token: string }>,
    ) => {
      state.user = user
      state.access_token = access_token
      state.stream_token = stream_token
      localStorage.setItem('auth', JSON.stringify(state)); // Persist to localStorage
    },
    logout: (state) => {
      state.user = null;
      state.access_token = null;
      state.stream_token = null; // Clear stream token if needed
      localStorage.removeItem('auth'); // Clear localStorage on logout
    },
  },
})

export const { setCredentials, logout  } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user

export const selectAccessToken = (state: RootState) => state.auth.access_token

export const selectStreamToken = (state: RootState) => state.auth.stream_token
