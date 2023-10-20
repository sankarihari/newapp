import { ArrowOutward, CallMissed, CallReceived } from '@mui/icons-material'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  
`

const History = () => {
    return (
        <Container>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>

                        </Avatar>
                    </ListItemAvatar>
                    <CallMissed style={{ color: 'red' }} />
                    <ListItemText primary="Sree" secondary="87563863856 " />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>

                        </Avatar>
                    </ListItemAvatar>
                    <CallReceived style={{ color: 'green' }} />
                    <ListItemText primary="Photos" secondary="Jan 9, 12:40pm" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>

                        </Avatar>
                    </ListItemAvatar>
                    <ArrowOutward />
                    <ListItemText primary="Photos" secondary="Jan 9, 2:40am" />
                </ListItem>
            </List>
        </Container>
    )
}

export default History