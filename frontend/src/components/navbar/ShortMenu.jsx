import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AddIcon from '@mui/icons-material/Add';
import { Link , useLocation} from 'react-router';


export default function ShortMenu() {

    const location=useLocation()
    const path=location.pathname
    console.log(path)

  return (
        <>
        <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        
        >
        
        <ListItemButton component={Link} to='' selected={path==='/'} sx={{display:'flex',justifyContent:'center'}}>
            <ListItemIcon sx={{display:'flex',justifyContent:'center'}}>
            <SpaceDashboardIcon />
            </ListItemIcon>           
        </ListItemButton>
        <ListItemButton component={Link} to='/create' selected={path==='/create'} sx={{display:'flex',justifyContent:'center'}}>
            <ListItemIcon sx={{display:'flex',justifyContent:'center'}}>
            <AddIcon />
            </ListItemIcon>
        </ListItemButton>
        
        </List>

  </>
  );
}
