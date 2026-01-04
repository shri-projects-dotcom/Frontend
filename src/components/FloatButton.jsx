import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

export default function FloatingActionButtons() {
    const myStyle={
        position:"absolute",
        right:20,
        bottom:20
    }
    const nav=useNavigate()
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" variant="extended" sx={myStyle} onClick={()=>nav("/add")}> 
      {/* <NavigationIcon sx={{ mr: 1 }} /> */}
      <AddIcon/>

        Add
      </Fab>
    </Box>
  );
}
