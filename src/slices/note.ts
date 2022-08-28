import { NoteItem, NoteState } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: NoteState = {
  notes: [],
}

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote: (state, { payload }: PayloadAction<NoteItem>) => {},
  },
})

export const { addNote } = noteSlice.actions

export default noteSlice.reducer
