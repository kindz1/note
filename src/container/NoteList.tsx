import SearchBar from '@/components/NoteList/SearchBar'
import { Box } from '@mui/material'
import React from 'react'

const NoteList: React.FunctionComponent = () => {
  return (
    <Box className="note-sidebar">
      <Box className="note-sidebar-header">
        <SearchBar />
      </Box>
    </Box>
  )
}

export default NoteList
