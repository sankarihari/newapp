import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {  Typography } from '@mui/material';




const Tablelist = () => {
  return (
    <div>
         <TableContainer component={Paper}>
            
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
        <TableBody>
          
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
             
              <Typography style={{color:'blue'}}>karthik</Typography>
              <Typography style={{color:'black', fontSize:13}}>234656546</Typography>
              
              </TableCell>
              <TableCell>
             
              <Typography style={{color:'blue'}}>HARI</Typography>
              <Typography style={{color:'black', fontSize:13}}>5457345187</Typography>
              </TableCell>
              <TableCell >
              <Typography style={{color:'gray',fontSize:13}}>0min 2sec</Typography>
              <Typography style={{color:'green',fontSize:13}}>Answred</Typography>
              <Typography style={{color:'gray',fontSize:13}}>Depeartment</Typography>
              <Typography style={{color:'gray', fontSize:13}}>2023-08-07 4:00pm</Typography>
              </TableCell>
             
            </TableRow>

            <TableRow
              
              style={{backgroundColor:'#e0ebeb'}}
            >
              <TableCell component="th" scope="row">
            
              <Typography style={{color:'blue'}}>kavya</Typography>
              <Typography style={{color:'black', fontSize:13}}>7659328746986</Typography>
              </TableCell>
              <TableCell>
             
              <Typography style={{color:'blue'}}>HARI</Typography>
              <Typography style={{color:'black', fontSize:13}}>5457345187</Typography>
              </TableCell>
              <TableCell >
              <Typography style={{color:'gray',fontSize:13}}>0min 2sec</Typography>
              <Typography style={{color:'green',fontSize:13}}>Answred</Typography>
              <Typography style={{color:'gray',fontSize:13}}>Depeartment</Typography>
              <Typography style={{color:'gray', fontSize:13}}>2023-08-07 4:00pm</Typography>
              </TableCell>
             
            </TableRow>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
            
              <Typography style={{color:'blue'}}>SREE</Typography>
              <Typography style={{color:'black', fontSize:13}}>7659328746986</Typography>
              </TableCell>
              <TableCell>
             
              <Typography style={{color:'blue'}}>HARI</Typography>
              <Typography style={{color:'black', fontSize:13}}>5457345187</Typography>
              </TableCell>
              <TableCell >
              <Typography style={{color:'gray',fontSize:13}}>0min 2sec</Typography>
              <Typography style={{color:'green',fontSize:13}}>Answred</Typography>
              <Typography style={{color:'gray',fontSize:13}}>Depeartment</Typography>
              <Typography style={{color:'gray', fontSize:13}}>2023-08-07 4:00pm</Typography>
              </TableCell>
             
            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Tablelist