import React from 'react'
import "./Style/Home.css"
import {Link} from "react-router-dom"

const Home = () => {
  return (
        <>
        <div className='home_div'>
            <p style={{fontSize:"50px"}}>Welcome to Food's Kitchen</p>
            <Link to="/food"><button className='btn' style={{marginTop:15}} >GO TO MENU</button></Link>
            
        </div>
        </>
  )
}

export default Home