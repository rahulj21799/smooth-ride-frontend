import { Input } from 'antd'
import React, { useState } from 'react'
import NavBarLogin from './NavBarLogin'
// import {Input, Card} from ''
const HomeTwo = () => {
    
    const [address, setAddress] = useState([])

    return (
        
        <>
            <NavBarLogin/>
            <Input placeholder='Enter pickup location'/>
            
        </>
    )
}

export default HomeTwo
