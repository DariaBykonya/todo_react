import dealsReducer, { addDeal, toggleDealStatus, clearCompletedDeals, deleteDeal, setInvalid, IDealsListState } from './dealsSlice';

const initialState: IDealsListState = {
  deals: [
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
  ],
  isLoading: false,
  error: null,
  isDataInvalid: true,
  needUpdate: false,
};

test('should return the initial state', () => {
  expect(dealsReducer(undefined, { type: '' })).toEqual(initialState);
});

test('should handle addDeal', () => {
  const newDeal = {
    id: 'random13-ido3u',
    isDone: false,
    text: 'New Deal'
  };

  const state = dealsReducer(initialState, addDeal(newDeal));

  expect(state.deals).toHaveLength(3);
  expect(state.deals).toContainEqual(newDeal);
});

test('should handle toggleDealStatus', () => {
  const dealIdToToggle = 'dca8908b-424f-4dc1-adb1-85615ed6bdeb';

  const state = dealsReducer(initialState, toggleDealStatus(dealIdToToggle));

  const toggledDeal = state.deals.find(deal => deal.id === dealIdToToggle);
  expect(toggledDeal).toBeDefined();
  expect(toggledDeal?.isDone).toBe(true);
});

test('should handle clearCompletedDeal', () => {
  const state = dealsReducer(initialState, clearCompletedDeals());

  expect(state.deals).toHaveLength(1);
  expect(state.deals).toEqual([
    {
      id: 'dca8908b-424f-4dc1-adb1-85615ed6bdeb',
      isDone: false,
      text: "Walking",
    }
  ]);
})

test('should handle deleteDeal', () => {
  const dealIdToDelete = 'dca8908b-424f-4dc1-adb1-85615ed6bdeb';
  const state = dealsReducer(initialState, deleteDeal(dealIdToDelete));

  expect(state.deals).toHaveLength(1);
  expect(state.deals).toEqual([
    {
      id: '42c4356e-80f5-4974-b20c-61e5e5388662',
      isDone: true,
      text: "Reading",
    }  
  ]);
});

test('should handle setInvalid', () => {
  const state = dealsReducer(initialState, setInvalid());

  expect(state.isDataInvalid).toBe(true);
});