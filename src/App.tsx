import './App.css'
import React, { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home'
import Suggest from './components/Suggest'
import Profile from './components/Profile'
import Bookmark from './components/‌Bookmark'

const App = () => {
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
      {componentMapping[activePage]}
    </>
  )
}

export default App
