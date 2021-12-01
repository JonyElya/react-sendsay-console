import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'src/helpers/sendsay';

const initialState: IAuthStore = {
  loading: false,
  sessionKey: null,
  login: null,
  sublogin: null,
  error: '',
};

const authenticate = createAsyncThunk<ResponseAuthData, RequestAuthData>(
  'auth/authenticate',
  async (data, { rejectWithValue }) => {
    try {
      await api.sendsay.login(data);
      document.cookie = `sendsay_session=${api.sendsay.session}`;
      api.sendsay.setSessionFromCookie('sendsay_session');
      return { login: data.login, sublogin: data.sublogin, sessionKey: api.sendsay.session };
    } catch (error) {
      return rejectWithValue(JSON.stringify({ id: error?.id, explain: error?.explain }));
    }
  }
);

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    document.cookie = 'sendsay_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    api.sendsay.setSessionFromCookie('sendsay_session');
  } catch (ee) {}
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authenticate.fulfilled, (state, action) => {
        return { ...action.payload, loading: false, error: '' };
      })
      .addCase(authenticate.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(authenticate.rejected, (state, action) => {
        return { ...state, loading: false, error: (action.payload as unknown) as string };
      });
    builder.addCase(logout.fulfilled, () => {
      return initialState;
    });
  },
});

export { authSlice, authenticate, logout };
