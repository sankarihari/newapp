import React from 'react'
import { Card } from '@mui/material'
import styled from 'styled-components'
import View from '../components/View'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'




const Wrapper = styled.div`
    width: 80%;
    margin-left: 10%;
    margin-top: 20px;
    
`
const Front = () => {
    return (
        <div>
            <Wrapper>
                <Card variant="outlined">

                    <Navbar />
                   <Menu/>
            
                    <View />
                 

                </Card>
            </Wrapper>

        </div>
    )
}

export default Front