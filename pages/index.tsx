import { Button } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SplitPane from 'react-split-pane'
import { AppSidebar } from '@/container/AppSidebar'
import NoteList from '@/container/NoteList'
import NoteEditor from '@/container/NoteEditor'

const Home: NextPage = () => {
  return (
    <div>
      {/* @ts-ignore */}
      <SplitPane
        split="vertical"
        split="vertical"
        minSize={150}
        maxSize={500}
        defaultSize={240}
      >
        <AppSidebar />

        <NoteEditor />
      </SplitPane>
    </div>
  )
}

export default Home
