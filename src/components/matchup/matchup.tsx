import { Inbox } from '@mui/icons-material';
import { Paper, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
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
  const HEIGHT = 88;

  useEffect(() => {
    const m = ((16 / props.count) - 1) * HEIGHT / 2;
    setMargin(m);
  }, []);

  return <Paper elevation={3} style={{marginTop: margin, marginBottom: margin, width: '12em'}}>
  <List dense component="nav">
    <ListItemButton
      selected={props.matchup.winnerId === props.matchup.creature1Id}
      // onClick={(e) => setWinnerId(props.matchup.creature1Id)}
    >
      <ListItemIcon>
        <Inbox />
      </ListItemIcon>
      <ListItemText primary={props.matchup.creature1?.name ?? 'Unselected'} />
    </ListItemButton>

    <ListItemButton
      selected={props.matchup.winnerId === props.matchup.creature2Id}
      // onClick={(e) => setWinnerId(props.matchup.creature2Id)}
    >
      <ListItemIcon>
        <Inbox />
      </ListItemIcon>
      <ListItemText primary={props.matchup.creature2?.name ?? 'Unselected'} />
    </ListItemButton>
  </List>
</Paper>
};

export default Matchup;
