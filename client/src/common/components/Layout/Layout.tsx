import { ReactNode } from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import { Logo, LogoWrapper } from 'common/components/Layout/layout.styles';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => (
  <Box sx={{ pb: 5 }}>
    <CssBaseline />
    <AppBar color="default" elevation={0}>
      <Toolbar>
        <LogoWrapper>
          <Logo data-testid="sentimental-badger-logo" />
        </LogoWrapper>
      </Toolbar>
    </AppBar>
    <Box component="main" sx={{ flexGrow: 1, px: 3, pt: 12 }}>
      {children}
    </Box>
  </Box>
);
