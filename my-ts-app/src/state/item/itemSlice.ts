import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import data from '../../static/stackline_frontend_assessment_data_2021.json';
import { RootState } from '../store';

export interface Item {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: Review[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: Sale[];
}
export interface Sale {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

interface Review {
  customer: string;
  review: string;
  score: number;
}

interface ItemState {
  entities: Item[];
  loading: boolean;
}

const initialState: ItemState = {
  entities: [],
  loading: false,
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItemAsync.pending, (state) => {
        console.log('getItemAsync.pending');
        state.loading = true;
      })
      .addCase(
        getItemAsync.fulfilled,
        (state, action: PayloadAction<Item[]>) => {
          console.log('fulfilled', action.payload);
          state.entities = action.payload;
          state.loading = false;
        },
      );
  },
});

export const getItemAsync = createAsyncThunk('item/getItemAsync', async () => {
  // simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data;
});

export const selectData = (state: RootState) => state.item;

export default itemSlice.reducer;
