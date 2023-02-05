import { Inbox } from '@mui/icons-material';
import { Paper, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { IUserMatchup } from '../../interfaces/models/userMatchup';
import styles from './matchup.module.css';

interface UserMatchupProps {
  matchup: IUserMatchup;
  count: number;
}

const UserMatchup: FC<UserMatchupProps> = (props) => {
  const [margin, setMargin] = useState(0);
  const [winnerId, setWinnerId] = useState<number | undefined>(undefined);
  const HEIGHT = 88;

  useEffect(() => {
    const m = ((16 / props.count) - 1) * HEIGHT / 2;
    setMargin(m);
  }, []);

  return <Paper elevation={3} style={{marginTop: margin, marginBottom: margin, width: '12em'}}>
  <List dense component="nav">
    <ListItemButton
      selected={props.matchup.winnerId === props.matchup.creature1Id}
      onClick={(e) => setWinnerId(props.matchup.creature1Id)}
    >
      <ListItemIcon>
        <Inbox />
      </ListItemIcon>
      <ListItemText primary={props.matchup.creature1?.name ?? 'asdf'} />
    </ListItemButton>

    <ListItemButton
      selected={props.matchup.winnerId === props.matchup.creature2Id}
      onClick={(e) => setWinnerId(props.matchup.creature2Id)}
    >
      <ListItemIcon>
        <Inbox />
      </ListItemIcon>
      <ListItemText primary={props.matchup.creature2?.name ?? 'asdf'} />
    </ListItemButton>
  </List>
</Paper>
};

export default UserMatchup;
