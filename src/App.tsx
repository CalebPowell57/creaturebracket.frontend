import React, { useEffect, useState } from 'react';
import './App.css';
import { Container } from '@mui/material';
import Router from './components/router/router';
import Auth from './components/auth/auth';

import TopBar from './components/topBar/topBar';
import BottomBar from './components/bottomBar/bottomBar';
import axios from 'axios';
import { setBracket } from './state/slices/bracket';
import { useAppDispatch } from './state/hooks';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.get('bracket').then((r) => {
      dispatch(setBracket(r.data));
    });
  }, [])

  return (
    <Container disableGutters style={{ height:'100vh' }}>
      <Auth>
        <TopBar/>
        <Router/>
        <BottomBar/>
      </Auth>
    </Container>
  );
}

export default App;
