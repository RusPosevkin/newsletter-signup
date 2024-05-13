import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type NewsletterState = {
  isSubmitted: boolean;
  message: string;
};

export interface INewsletterState {
  newsletterState: NewsletterState
}

const initialState: INewsletterState = {
  newsletterState: {
    isSubmitted: false,
    message: ''
  }
};

export const newsletterSlice = createSlice({
  name: 'newsletter',
  initialState,
  reducers: {
    setNewsletterState: (state, action: PayloadAction<NewsletterState>) => {
      state.newsletterState = action.payload;
    },
  },
});

export const { setNewsletterState } = newsletterSlice.actions;
export const newsletterReducer = newsletterSlice.reducer;
