import React from 'react'
import Searchbar from '../components/Searchbar'
import History from '../components/History'
import { Card } from '@mui/material'
import styled from 'styled-components'
import Notifications from '../components/Notifications'


const Container = styled.div`
   
    justify-content: center;
    width: 100%;
   
`
const Cardview = styled.div`
    margin-right: 20px;
    margin-left: 30%;
    justify-content: center;
    align-items: center;
`
const Callhistorypage = () => {
    return (
        <Container>
            <Cardview>
                <Card sx={{ width: 600 }}>

                    <Searchbar />
                    <Notifications />
                    <History />
                </Card>
            </Cardview>


        </Container>
    )
}

export default Callhistorypage