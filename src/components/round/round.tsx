import { Stack } from '@mui/material';
import React, { FC } from 'react';
import { IMatchup } from '../../interfaces/models/matchup';
import Matchup from '../matchup/matchup';

interface RoundProps {
  matchups: IMatchup[];
}

const Round: FC<RoundProps> = (props) => {
  return <Stack spacing={2}>
    {props.matchups.map((m) => 
      <Matchup matchup={m} key={m.id}/>
    )}
</Stack>
}

export default Round;
