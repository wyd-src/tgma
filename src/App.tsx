import './App.css'
import React, { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home'
import Suggest from './components/Suggest'
import Profile from './components/Profile'
import Bookmark from './components/‌Bookmark'
import WebApp from '@twa-dev/sdk'
import { useStore } from './stores'
import { observer } from 'mobx-react-lite'

const App = observer(function App() {
  const { user } = useStore()
  user.setQueryId(WebApp.initData)
  const [activePage, setActivePage] = useState<string>('home')
  const componentMapping = {
    home: <Home />,
    suggest: <Suggest />,
    bookmarks: <Bookmark />,
    profile: <Profile />,
  }
  return (
    <>
      <Header setActivePage={setActivePage} />
      {user.queryId && componentMapping[activePage]}
    </>
  )
})

export default App
