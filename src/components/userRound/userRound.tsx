import { Stack } from '@mui/material';
import React, { FC } from 'react';
import { IUserMatchup } from '../../interfaces/models/userMatchup';
import UserMatchup from '../userMatchup/userMatchup';

interface UserRoundProps {
  matchups: IUserMatchup[];
}

const Round: FC<UserRoundProps> = (props) => {
  return <Stack>
    {props.matchups.map((m) => 
      <UserMatchup matchup={m} key={m.rank} count={props.matchups.length}/>
    )}
</Stack>
}

export default Round;
