import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { CallReceived, PhoneDisabled, PhoneMissed } from '@mui/icons-material';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });
const Notifications = () => {
    return (
        <Grid container spacing={2}>
            {[lightTheme].map((theme, index) => (
                <Grid item xs={7} key={index}>
                    <ThemeProvider theme={theme}>
                        <Box
                            sx={{
                                p: 2,
                                borderRadius: 2,
                                bgcolor: 'background.default',
                                display: 'grid',
                                gridTemplateColumns: { md: '1fr 1fr' },
                                gap: 2,
                            }}
                        >
                            <Item style={{ backgroundColor: '#c2d6d6' }}>
                                <Typography style={{ color: 'black' }}>
                                    <CallReceived style={{ color: 'green' }} /> Answered</Typography>
                                <Typography>6</Typography>
                            </Item>
                            <Item style={{ backgroundColor: '#ff9999' }}>
                                <Typography style={{ color: 'black' }}>
                                    <PhoneDisabled style={{ color: 'red' }} /> Not Answered</Typography>
                                <Typography>4</Typography>
                            </Item>
                            <Item style={{ backgroundColor: '#99c2ff' }} >
                                <Typography style={{ color: 'black' }}>
                                    <PhoneMissed style={{ color: 'black' }} /> Missed calls</Typography>
                                <Typography>4</Typography>
                            </Item>
                            <Item style={{ backgroundColor: '#ce9ecf' }}>
                                <Typography style={{ color: 'black' }}>
                                    <PhoneDisabled style={{ color: 'red' }} /> Unavailable</Typography>
                                <Typography>4</Typography>
                            </Item>
                            <Item style={{ backgroundColor: '#e3e974' }}>
                                <Typography style={{ color: 'black' }}>
                                    <PhoneDisabled style={{ color: 'red' }} /> Busy</Typography>
                                <Typography>4</Typography>
                            </Item>
                            <Item style={{ backgroundColor: '#ffb5b5' }}>
                                <Typography style={{ color: 'black' }}>
                                    <PhoneDisabled style={{ color: 'red' }} /> Noinput</Typography>
                                <Typography>4</Typography>
                            </Item>
                        </Box>
                    </ThemeProvider>
                </Grid>
            ))}
        </Grid>
    )
}

export default Notifications