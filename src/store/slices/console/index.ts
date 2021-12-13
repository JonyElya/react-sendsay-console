import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'src/helpers/sendsay';

import convertHistoryConsole from 'src/utils/convertHistoryConsole';

const ERROR_MESSAGE = 'Ошибка валидации, проверьте введенные данные';

const initialState: IConsoleStore = {
  response: '',
  request: '',
  loading: false,
  hasError: false,
  history: [],
};

const createRequest = createAsyncThunk<ResponseConsoleData, RequestConsoleData>(
  'console/create',
  async (data, { rejectWithValue }) => {
    const request =
      typeof JSON.parse(data.request.toString()) === 'object' ? JSON.parse(data.request.toString()) : data.request;

    if (!request || data.request.toString() !== JSON.stringify(request, null, 2)) {
      return rejectWithValue({ response: ERROR_MESSAGE, request, status: 'failed' });
    }

    try {
      const response = await api.sendsay.request(request);
      return { response, request, status: 'success' };
    } catch (error) {
      return rejectWithValue({ response: error, request, status: 'failed' });
    }
  }
);

const consoleSlice = createSlice({
  name: 'console',
  initialState,
  reducers: {
    clear: (state) => {
      state.history.length = 0;
    },
    removeItem: (state, action) => {
      state.history = state.history.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createRequest.fulfilled, (state, action) => {
      const { response, request, status } = action.payload as ResponseConsoleData;

      return {
        ...state,
        loading: false,
        hasError: false,
        response: JSON.stringify(response, null, 2),
        request: JSON.stringify(request, null, 2),
        history: convertHistoryConsole(state.history, { response, request, status, id: +state.history.length + 1 }),
      };
    });
    builder.addCase(createRequest.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(createRequest.rejected, (state, action) => {
      if (!action.payload) {
        return {
          ...state,
          loading: false,
          response: ERROR_MESSAGE,
          hasError: true,
        };
      }
      const { response, request, status } = action.payload as ResponseConsoleData;

      return {
        ...state,
        loading: false,
        response: JSON.stringify(response, null, 2),
        request: JSON.stringify(request, null, 2),
        hasError: true,
        history: convertHistoryConsole(state.history, { response, request, status, id: +state.history.length + 1 }),
      };
    });
  },
});

export { consoleSlice, createRequest };
