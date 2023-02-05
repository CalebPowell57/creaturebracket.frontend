import { Stack } from '@mui/material';
import React, { FC } from 'react';
import { IMatchup } from '../../interfaces/models/matchup';
import Matchup from '../matchup/matchup';

interface RoundProps {
  matchups: IMatchup[];
}

const Round: FC<RoundProps> = (props) => {
  return <Stack>
    {props.matchups.map((m) => 
      <Matchup matchup={m} key={m.id} count={props.matchups.length}/>
    )}
</Stack>
}

export default Round;
