import React from 'react'
import Topbar from './Topbar/Topbar'
import "./main.css"
import Cards from '../Cards/Cards'

import Bottom from '../Bottom/Bottom'

const Main = () => {
  return (
    <div className="main">
        <Topbar/>
        <Cards/>
        <Bottom/>
    </div>
  )
}

export default Main