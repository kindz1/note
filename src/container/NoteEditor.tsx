import SearchBar from '@/components/NoteList/SearchBar'
import { Box } from '@mui/material'
import React from 'react'

import CodeMirror from '@uiw/react-codemirror'

const NoteEditor: React.FunctionComponent = () => {
  return (
    <>
      <CodeMirror value="console.log('hello world!');" onChange={() => {}} />
    </>
  )
}

export default NoteEditor
