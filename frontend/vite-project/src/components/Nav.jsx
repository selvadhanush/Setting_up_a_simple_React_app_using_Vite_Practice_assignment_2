import React from 'react'
import {Link} from "react-router-dom"

function Nav() {
  return (
    <div>
        <Link to="/"><h4>home</h4></Link>
        <Link to="/abc"><h4>abc</h4></Link>
       
    </div>
  )
}

export default Nav
