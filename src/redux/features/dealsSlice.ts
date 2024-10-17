import { createSlice } from "@reduxjs/toolkit";
import IDeal from "../../interface/IDeal";

export interface IDealsListState {
  deals: IDeal[];
  isLoading: boolean;
  error: string | null;
  isDataInvalid: boolean;
  needUpdate: boolean;
}

let listOfDeal = [
  {
    id: 'dca8908b-424f-4dc1-adb1-85615ed6bdeb',
    isDone: false,
    text: "Walking",
  },
  {
    id: '42c4356e-80f5-4974-b20c-61e5e5388662',
    isDone: true,
    text: "Reading",
  }
];

const initialState: IDealsListState = {
  deals: listOfDeal,
  isLoading: false,
  error: null,
  isDataInvalid: true,
  needUpdate: false
};

const dealsSlice = createSlice({
  name: 'deals',
  initialState,
  reducers: {
    setInvalid(state) {
      state.isDataInvalid = true;
    },
    addDeal(state, action) {
      state.deals.push(action.payload);
    },
    toggleDealStatus(state, action) {
      const deal = state.deals.find((deal) => deal.id === action.payload);
        if (deal) {
          deal.isDone = !deal.isDone;
        }
    },
    clearCompletedDeals(state) {
      state.deals = state.deals.filter((deal) => !deal.isDone);
    },
    deleteDeal(state, action) {
      state.deals = state.deals.filter((deal) => deal.id !== action.payload);
    }
  },
  extraReducers() {}
});

export const { setInvalid, addDeal, toggleDealStatus, clearCompletedDeals, deleteDeal } = dealsSlice.actions;

export default dealsSlice.reducer;
