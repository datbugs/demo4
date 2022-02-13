import { createSlice} from '@reduxjs/toolkit'
import { CouterFollow } from './thunk'

export interface CounterState {
  value: number;
  follow: number;
  user: {
    name: string;
    id: number;
    email: string;
  } | null;
}

const initialState: CounterState = {
  value: 69,
  follow: 10,
  user: null,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CouterFollow.fulfilled, (state, action) =>{
      return {
        ...state,
        follow: action.payload,
      };
    })
  }
})
export const { increment  } = counterSlice.actions

export default counterSlice.reducer