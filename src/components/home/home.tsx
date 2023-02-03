import { Paper, List, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
import React, { FC, useState } from 'react';
import styles from './home.module.css';
import { useAppSelector } from '../../state/hooks';
import { BracketState } from '../../state/slices/bracket';
import { Inbox } from '@mui/icons-material';
import Matchup from '../matchup/matchup';
import Round from '../round/round';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { bracket } = useAppSelector(BracketState);

  return <>{bracket &&
    <div className={styles.main}>
      <Stack spacing={2} style={{display: 'flex', alignItems: 'center'}} direction='row'>
        <Round matchups={bracket.matchups.filter((m) => m.round === 1)}/>
        <Round matchups={bracket.matchups.filter((m) => m.round === 2)}/>
        <Round matchups={bracket.matchups.filter((m) => m.round === 3)}/>
        <Round matchups={bracket.matchups.filter((m) => m.round === 4)}/>
        <Round matchups={bracket.matchups.filter((m) => m.round === 5)}/>
      </Stack>
    </div>
  }</>;
}

export default Home;
