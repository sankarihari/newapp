import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {  Typography } from '@mui/material';

const Busy = () => {
  return (
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
            
              <Typography style={{color:'blue'}}>keerthi</Typography>
              <Typography style={{color:'black', fontSize:13}}>52345275</Typography>
              </TableCell>
              <TableCell>
             
              <Typography style={{color:'blue'}}>parvathi</Typography>
              <Typography style={{color:'black', fontSize:13}}>6523758</Typography>
              </TableCell>
              <TableCell >
              <Typography style={{color:'gray',fontSize:13}}>0min 2sec</Typography>
              <Typography style={{color:'red',fontSize:13}}>Busy</Typography>
              <Typography style={{color:'gray',fontSize:13}}>Depeartment</Typography>
              </TableCell>
             
            </TableRow>

            <TableRow
              
              style={{backgroundColor:'#e0ebeb'}}
            >
              <TableCell component="th" scope="row">
            
              <Typography style={{color:'blue'}}>Vinu</Typography>
              <Typography style={{color:'black', fontSize:13}}>2345674141</Typography>
              </TableCell>
              <TableCell>
             
              <Typography style={{color:'blue'}}>meera</Typography>
              <Typography style={{color:'black', fontSize:13}}>54747643</Typography>
              </TableCell>
              <TableCell >
              <Typography style={{color:'gray',fontSize:13}}>0min 2sec</Typography>
              <Typography style={{color:'red',fontSize:13}}>Busy</Typography>
              <Typography style={{color:'gray',fontSize:13}}>Depeartment</Typography>
              </TableCell>
             
            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer> 
    </div>
  )
}

export default Busy