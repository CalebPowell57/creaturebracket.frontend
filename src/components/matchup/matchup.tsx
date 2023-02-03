import { Inbox } from '@mui/icons-material';
import { Paper, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { FC, useState } from 'react';
import { IMatchup } from '../../interfaces/models/matchup';
import styles from './matchup.module.css';

interface MatchupProps {
  matchup: IMatchup;
}

const Matchup: FC<MatchupProps> = (props) => {
  const [winnerId, setWinnerId] = useState<number | undefined>(undefined);

  return <Paper elevation={3}>
  <List dense component="nav" aria-label="main mailbox folders">
    <ListItemButton
      selected={props.matchup.winnerId === winnerId}
      onClick={(e) => setWinnerId(props.matchup.creature1Id)}
    >
      <ListItemIcon>
        <Inbox />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItemButton>

    <ListItemButton
      selected={props.matchup.winnerId === winnerId}
      onClick={(e) => setWinnerId(props.matchup.creature2Id)}
    >
      <ListItemIcon>
        <Inbox />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItemButton>
  </List>
</Paper>
};

export default Matchup;
