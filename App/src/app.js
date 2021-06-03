import React from 'react'
import MenuBar from "./components/Menubar/MenuBar"
import Screen from "./components/Screen/Screen"
import RightDisp from "./components/Rightdisplaybar/RightDisp"
import Playbar from "./components/Playbar/PlayBar"

import {Row,Col,Container} from "react-bootstrap"

import "./app.css"

const App = () => {
    return (
    <div>
        <div  >
            <Row>
            <Col className='app_container'><MenuBar/></Col>
            <Col>
            <Container fluid >
                <Screen/>
            </Container>
            </Col>
            <Col><RightDisp/></Col> 
            </Row>
        </div>
         <Playbar/>
    </div>

       
        
    )
}

export default App
