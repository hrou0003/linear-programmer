import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import NavDrawer from '../navigation/NavDrawer';
import Plotter from '../plotter/Plotter';
import Creator from '../creator/Creator';
import Info from './Info';

const drawerWidth = 240;

type MainContextType = {
  currentView?: string;
  setCurrentView?: React.Dispatch<React.SetStateAction<string>>;
}

export const MainContext = React.createContext<MainContextType>({})

export default function Main() {

  const [currentView, setCurrentView] = React.useState('plotter')


  return (
    <MainContext.Provider value={{currentView, setCurrentView}}>
      <Box sx={{ display: 'flex', background: 'white', color: 'black' }}>
        <CssBaseline />

        <NavDrawer />

        <Box
          component="main"
          sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, height: '100vh'}}
        >
          {
            {
              'plotter': <Plotter />,
              'creator': <Creator />,
              'info': <Info />
            }[currentView]
          }

        </Box>
      </Box>
    </MainContext.Provider>
  );
}