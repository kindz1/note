import { Folder } from '@/utils/enum'

export interface NoteItem {
  id: string
  text: string
  created: string
  lastUpdated: string
  category?: string
  trash?: boolean
  favorite?: boolean
}

export interface NoteState {
  notes: NoteItem[]
}

export type WithPayload<P, T> = T & {
  payload: P
}
