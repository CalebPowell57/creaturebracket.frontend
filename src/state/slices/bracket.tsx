import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';
import { IBracket } from '../../interfaces/models/bracket';

import { RootState } from '../store';

export interface IBracketState {
	bracket?: IBracket;
}

const initialState: IBracketState = {
	bracket: undefined,
};

const BracketSlice: Slice = createSlice({
	name: 'bracket',
	initialState,
	reducers: {
		setBracket: (state: IBracketState, { payload }: PayloadAction<any>) => ({
			...state,
			bracket: payload
		}),
	},
});

export const { setBracket } = BracketSlice.actions;

export const BracketState = (state: RootState): IBracketState => state.bracket;

export default BracketSlice.reducer;