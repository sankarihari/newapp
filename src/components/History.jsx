
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'




const History = () => {
    return (
        <div>
            <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
                <ListItem  sx={{  bgcolor: '#f0f0f5' }}>
                    <ListItemAvatar>
                        <Avatar sx={{ width: 24, height: 24 }}>

                        </Avatar>
                    </ListItemAvatar>
                    
                    <ListItemText primary="Sree" secondary="87563863856 " />
                    <ListItemAvatar>
                        <Avatar sx={{ width: 24, height: 24 }}>
                        </Avatar>
                    </ListItemAvatar>
                    <Typography>
                    <ListItemText primary="Photos" secondary="Jan 9, 12:40pm" />
                    </Typography>
                
                </ListItem>
                <ListItem >
                    <ListItemAvatar>
                        <Avatar sx={{ width: 24, height: 24 }}>
                        </Avatar>
                    </ListItemAvatar>
                    
                    <ListItemText  primary="fgguggi" secondary="Jan 9, 12:40pm" />
                    <ListItemAvatar>
                        <Avatar sx={{ width: 24, height: 24 }}>
                        </Avatar>
                    </ListItemAvatar>
                    <Typography>
                    <ListItemText primary="Photos" secondary="Jan 9, 12:40pm" />
                    </Typography>
                </ListItem>
                <ListItem  sx={{  bgcolor: '#f0f0f5' }}>
                    <ListItemAvatar>
                        <Avatar sx={{ width: 24, height: 24 }}>

                        </Avatar>
                    </ListItemAvatar>
                    
                    <ListItemText primary="Photos" secondary="Jan 9, 2:40am" />
                    <ListItemAvatar>
                        <Avatar sx={{ width: 24, height: 24 }}>
                        </Avatar>
                    </ListItemAvatar>
                    <Typography>
                    <ListItemText primary="Photos" secondary="Jan 9, 12:40pm" />
                    </Typography>
                   
                </ListItem>
                
            </List>
        </div>
    )
}

export default History