import React from 'react'

import {Col,Container,ListGroup} from "react-bootstrap"
import { BiHomeHeart,BiSearchAlt } from "react-icons/bi";
import { IoIosHeart } from "react-icons/io";
import { FiPlusSquare } from "react-icons/fi";


import { Link } from 'react-router-dom'

import "./MenuBar.css"
const MenuBar = () => {
    return (
       <div>
        <ListGroup className='sidebar'>
        <ListGroup.Item style={{display: 'flex',alignItems: 'center',flexWrap: 'wrap'}} action variant="dark">
        <BiHomeHeart size={29} />
          home
        </ListGroup.Item>
    
        <ListGroup.Item style={{display: 'flex',alignItems: 'center',flexWrap: 'wrap'}} action variant="dark">
        <BiSearchAlt size={29} />
          search
        </ListGroup.Item>
            
        <ListGroup.Item style={{display: 'flex',alignItems: 'center',flexWrap: 'wrap'}} action variant="dark">
        <IoIosHeart size={29} />
          liked songs
        </ListGroup.Item>

        <ListGroup.Item style={{display: 'flex',alignItems: 'center',flexWrap: 'wrap'}} action variant="dark">
        <FiPlusSquare size={29} />
          create playlist
        </ListGroup.Item>
        <hr style={{margin: "15px"}}></hr>
        <span style={{margin: "5px 5px 5px 30px"}}>Your playlists</span>
        
        <ListGroup.Item style={{display: 'flex',alignItems: 'center',flexWrap: 'wrap'}} action variant="dark">
            dummy 1
        </ListGroup.Item>
        <ListGroup.Item style={{display: 'flex',alignItems: 'center',flexWrap: 'wrap'}} action variant="dark">
            dummy 2
        </ListGroup.Item>
        <ListGroup.Item style={{display: 'flex',alignItems: 'center',flexWrap: 'wrap'}} action variant="dark">
            dummy 3
        </ListGroup.Item>
      </ListGroup>
        </div>
        
    )
}

export default MenuBar
