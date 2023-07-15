import React from 'react'
import styles from './style'
import './index.css'
import { Navbar,Hero } from './components'

const App = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} p-4 `}>
      <Navbar />
      <Hero />
    </div>
  
  )
}

export default App