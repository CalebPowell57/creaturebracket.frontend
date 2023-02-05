import { Stack } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../state/hooks';
import { BracketState } from '../../state/slices/bracket';
import UserRound from '../userRound/userRound';
import axios from 'axios';
import { IUserMatchup } from '../../interfaces/models/userMatchup';

interface PicksProps {}

const Picks: FC<PicksProps> = () => {
  const [matchups, setMatchups] = useState<IUserMatchup[]>([])

  const { bracket } = useAppSelector(BracketState);

  useEffect(() => {
    if (bracket) {
      axios.get(`userMatchup/calebpowell57/${bracket.id}`)
      .then((r) => {
        setMatchups(r.data);
        console.log(r.data);
      })
    }
  }, [bracket]);

  return <>{bracket &&
    <div style={{display: 'flex', height: '100%', flexDirection: 'column', overflowY: 'auto'}}>
      <Stack spacing={4} style={{display: 'flex'}} direction='row'>
        <UserRound matchups={matchups.filter((m) => m.round === 1)}/>
        <UserRound matchups={matchups.filter((m) => m.round === 2)}/>
        <UserRound matchups={matchups.filter((m) => m.round === 3)}/>
        <UserRound matchups={matchups.filter((m) => m.round === 4)}/>
        <UserRound matchups={matchups.filter((m) => m.round === 5)}/>
      </Stack>
    </div>
  }</>;
}

export default Picks;
