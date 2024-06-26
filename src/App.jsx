import React from 'react'
import Navbar from './components/Navbar'
import From from './components/From'
import { Container, Typography } from '@mui/material'
import ListGroup from './components/ListGroup'

const App = () => {
  return (
    <>
      <Navbar />
      <Container sx={{padding: "80px 0px" }}>
        <Typography variant='h5'align='center' sx={{ marginBottom: "20px" }}>
          Todo Tracker
        </Typography>
        <From />
        <ListGroup/>
      </Container>
    </>
  )
}

export default App
