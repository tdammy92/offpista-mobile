import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// Define the type for the theme state
type ThemeState = {
  theme: 'light' | 'dark';
};

// Initial state
const initialState: ThemeState = {
  theme: 'dark', // Default theme is light
};

export const themelice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Toggle between light and dark themes
    toggleTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    // Set a specific theme
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme, setTheme } = themelice.actions;

// export reducer function
export default themelice.reducer;

export type ThemeStateT = typeof themelice;
