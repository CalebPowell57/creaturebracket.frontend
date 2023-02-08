import { Inbox } from '@mui/icons-material';
import { Paper, List, ListItemButton, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { IUserMatchup } from '../../interfaces/models/userMatchup';
import styles from './matchup.module.css';

interface UserMatchupProps {
  matchup: IUserMatchup;
  count: number;
  onWinnerSelected: (winnerId: number, matchupRound: number, matchupRank: number) => void;
}

const UserMatchup: FC<UserMatchupProps> = (props) => {
  const [margin, setMargin] = useState(0);
  const [winnerId, setWinnerId] = useState<number | undefined>(undefined);
  const HEIGHT = 96;
  const AVATAR_SIZE = '32px';

  useEffect(() => {
    const m = ((16 / props.count) - 1) * HEIGHT / 2;
    setMargin(m);
  }, []);

  function handleSetWinner(creatureId: number) {
    setWinnerId(creatureId);
    props.onWinnerSelected(creatureId, props.matchup.round, props.matchup.rank);
  }

  return <Paper elevation={3} style={{marginTop: margin, marginBottom: margin, width: '12em'}}>
  <List dense component="nav">
    <ListItemButton
      selected={props.matchup.creature1Id !== null && winnerId === props.matchup.creature1Id}
      onClick={() => handleSetWinner(props.matchup.creature1Id as number)}
    >
      <ListItemIcon>
        <Avatar sx={{height: AVATAR_SIZE, width: AVATAR_SIZE}}/>
      </ListItemIcon>
      <ListItemText primary={props.matchup.creature1?.name} secondary={props.matchup.creature1 ? undefined : 'Unselected'}/>
    </ListItemButton>

    <ListItemButton
      selected={props.matchup.creature2Id !== null && winnerId === props.matchup.creature2Id}
      onClick={(e) => handleSetWinner(props.matchup.creature2Id as number)}
    >
      <ListItemIcon>
        <Avatar sx={{height: AVATAR_SIZE, width: AVATAR_SIZE}}/>
      </ListItemIcon>
      <ListItemText primary={props.matchup.creature2?.name} secondary={props.matchup.creature2 ? undefined : 'Unselected'}/>
    </ListItemButton>
  </List>
</Paper>
};

export default UserMatchup;
