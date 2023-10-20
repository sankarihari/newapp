
import { ArrowBack, CallMade, CallReceived } from '@mui/icons-material';
import { Badge, Button, ButtonGroup } from '@mui/material';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
   margin-bottom: 20px;
   margin-top: 20px;
   margin-left: 20px;
   
`


const Menu = () => {
  return (
    <Container>
        <Badge badgeContent={4} color="secondary">
        <Button variant="outlined" color="success"> <CallReceived/>Incoming</Button>
</Badge>{' '}

  
<Badge badgeContent={12} color="secondary">
<Button variant="outlined"> < CallMade/>Outgoing</Button>
</Badge>
    
       
    </Container>
  )
}

export default Menu