import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import InfoIcon from '@mui/icons-material/Info';

const Sidebar = () => {

  return (
      <Box sx={{marginTop: '30vh'}}>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsInputComponentIcon />
              </ListItemIcon>
              <ListItemText primary="Creator" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ScatterPlotIcon />
              </ListItemIcon>
              <ListItemText primary="Plotter" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Info" />
            </ListItemButton>
          </ListItem>
      </List>
      </Box>
  )
}

export default Sidebar;
