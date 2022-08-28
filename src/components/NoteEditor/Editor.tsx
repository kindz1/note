import React, { Component } from 'react'
import CodeMirror from '@uiw/react-codemirror'

const Edtior: React.FunctionComponent = () => (
  <div>
    <CodeMirror value="console.log('hello world!');" onChange={() => {}} />
  </div>
)

export default Edtior
