import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home'
import Suggest from './components/Suggest'
import Profile from './components/Profile'
import Bookmark from './components/‌Bookmark'
import WebApp from '@twa-dev/sdk'
import { useStore } from './stores'
import { observer } from 'mobx-react-lite'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { deserializeParams } from './utils/utils'

const App = observer(function App() {
  const { user, general } = useStore()
  user.setQueryId(WebApp.initData)
  const componentMapping = {
    home: <Home />,
    suggest: <Suggest />,
    bookmarks: <Bookmark />,
    profile: <Profile />,
  }

  general.setLanguage(deserializeParams(WebApp.initData).user.language_code)

  return (
    <>
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={general.currentPage}
          timeout={600}
          classNames="pageSliderLeft"
          mountOnEnter={true}
          unmountOnExit={true}
        >
          {user.queryId && componentMapping[general.currentPage]}
        </CSSTransition>
      </TransitionGroup>
    </>
  )
})

export default App
