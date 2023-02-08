import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';
import { IBracket } from '../../interfaces/models/bracket';

import { RootState } from '../store';

export interface IBracketsState {
	brackets: IBracket[];
}

const initialState: IBracketsState = {
	brackets: [],
};

const BracketsSlice: Slice = createSlice({
	name: 'brackets',
	initialState,
	reducers: {
		setBrackets: (state: IBracketsState, { payload }: PayloadAction<any>) => ({
			...state,
			brackets: payload
		}),
	},
});

export const { setBrackets } = BracketsSlice.actions;

export const BracketsState = (state: RootState): IBracketsState => state.brackets;

export default BracketsSlice.reducer;