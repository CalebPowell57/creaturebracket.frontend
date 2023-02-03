import { Paper, AppBar, Toolbar, IconButton, Button, Drawer, Badge, useTheme, Avatar } from '@mui/material';
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './topBar.module.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import axios from 'axios';
import { BracketState } from '../../state/slices/bracket';
import { Menu } from '@mui/icons-material';

interface TopBarProps {
}

const TopBar: FC<TopBarProps> = () => {
  const [selectionDrawerOpen, setSelectionDrawerOpen] = useState(false);

  const { bracket } = useAppSelector(BracketState);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const theme = useTheme();

  return (
    <div className={styles.TopBar}>
      <Paper elevation={3}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => navigate(-1)}
            >
              <Menu/>
            </IconButton>
            <Button variant='contained' endIcon={<ArrowDropDownIcon />} style={{marginLeft: 'auto', marginRight: 'auto', maxHeight:36.5, width: '100%'}} onClick={() => setSelectionDrawerOpen(true)}>
              <p style={{overflowX: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>{bracket?.name ?? 'Unselected'}</p>
            </Button>
            <Drawer
              anchor={'top'}
              open={selectionDrawerOpen}
              onClose={() => setSelectionDrawerOpen(false)}
            >
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setSelectionDrawerOpen(false)}
                  style={{margin: 0}}
                >
                  <CloseIcon />
                </IconButton>
              </div>
            </Drawer>
            <IconButton
              size="large"
              edge="end"
              color="primary"
              aria-label="menu"
              onClick={() => navigate(-1)}
            >
              <Avatar sx={{bgColor: theme.palette.primary.main}}>CP</Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Paper>
    </div>
  );
}

export default TopBar;
