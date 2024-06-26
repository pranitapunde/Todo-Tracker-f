import React from 'react'
import{AppBar, Button, Toolbar, Typography} from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {
  return (
<AppBar>
   <Toolbar>
   <Typography variant='h6' sx={{flexGrow :1}}> TodoTrackerFrontend</Typography>
   <Button variant="contained" endIcon={<DarkModeIcon/>}></Button>
   </Toolbar>

</AppBar>
  )
}

export default Navbar
