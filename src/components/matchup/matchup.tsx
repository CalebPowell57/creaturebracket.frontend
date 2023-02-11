import { Inbox } from '@mui/icons-material';
import { Paper, List, ListItemButton, ListItemIcon, ListItemText, Avatar, ListItem } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { IMatchup } from '../../interfaces/models/matchup';
import styles from './matchup.module.css';

interface MatchupProps {
  matchup: IMatchup;
  count: number;
}

const Matchup: FC<MatchupProps> = (props) => {
  const [margin, setMargin] = useState(0);
  const [winnerId, setWinnerId] = useState<number | undefined>(undefined);
  const HEIGHT = 96;
  const AVATAR_SIZE = '32px';

  useEffect(() => {
    const m = ((16 / props.count) - 1) * HEIGHT / 2;
    setMargin(m);
  }, []);

  return <Paper elevation={3} style={{marginTop: margin, marginBottom: margin, width: '12em'}}>
  <List dense component="nav">
    <ListItem
      selected={!(!props.matchup.winnerId) && props.matchup.winnerId === props.matchup.creature1Id}
      style={{}}
    >
      <ListItemIcon>
        <Avatar sx={{height: AVATAR_SIZE, width: AVATAR_SIZE}}/>
      </ListItemIcon>
      <ListItemText primary={props.matchup.creature1?.name} secondary={props.matchup.creature1Id ? undefined : 'Undetermined'} />
    </ListItem>

    <ListItem
      selected={!(!props.matchup.winnerId) && props.matchup.winnerId === props.matchup.creature2Id}
    >
      <ListItemIcon>
        <Avatar sx={{height: AVATAR_SIZE, width: AVATAR_SIZE}}/>
      </ListItemIcon>
      <ListItemText primary={props.matchup.creature2?.name} secondary={props.matchup.creature2Id ? undefined : 'Undetermined'}/>
    </ListItem>
  </List>
</Paper>
};

export default Matchup;
