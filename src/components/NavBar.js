import React from 'react'
import './NavBar.css'

function NavBar(props) {
    return (
        <nav>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0b4ijysjl46dfbU5S1xzXEPp2s9N_96aU5A&usqp=CAU"/>
            <ul>
                <li onClick={() => {props.change(false)}} > <img className="iconImage" src="images/chrono.png" /> <span>CHRONOMETER </span> </li>
                <li onClick={() => {props.change(true)}}> <img className="iconImage" src="images/clock.png" /> <span>CLOCK </span> </li>
            </ul>
        </nav>
    )
}

export default NavBar
