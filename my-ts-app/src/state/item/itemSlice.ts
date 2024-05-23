import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from '../../static/stackline_frontend_assessment_data_2021.json'

interface ItemState {
  id: string
  title: string
  image: string
  subtitle: string
  brand: string
  reviews: Review[]
  retailer: string
  details: string[]
  tags: string[]
  sales: Sale[]
}
interface Sale {
    weekEnding: string
    retailSales: number
    wholesaleSales: number
    unitsSold: number
    retailerMargin: number
}

interface Review {
    customer: string
    review: string
    score: number
}

const initialState: ItemState | {} = {};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },

  },
  extraReducers: (builder) => {
    builder
      .addCase(getItemAsync.pending, () => {
        console.log("incrementAsync.pending");
      })
      .addCase(
        getItemAsync.fulfilled,
        (state, action: PayloadAction<ItemState>) => {
          state = action.payload;
        }
      );
  },
});

export const getItemAsync = createAsyncThunk(
  "item/getItemAsync",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return data[0];
  }
);

export const { } = itemSlice.actions;

export default itemSlice.reducer;