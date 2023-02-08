import { Button, Paper, Stack, Typography } from '@mui/material';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { ICreatureSubmission } from '../../interfaces/models/creatureSubmission';
import { IMatchup } from '../../interfaces/models/matchup';
import { useAppSelector } from '../../state/hooks';
import { BracketState } from '../../state/slices/bracket';
import styles from './tools.module.css';

interface SeedMatchup {
  creature1Name: string;
  creature2Name: string;
  creature1Seed: number;
  creature2Seed: number;
}

interface ToolsProps {}

const Tools: FC<ToolsProps> = () => {
  const [matchups, setMatchups] = useState<SeedMatchup[]>([]);

  const { bracket } = useAppSelector(BracketState);

  function handleSeed() {
    axios.get(`bracket/${bracket!.id}/randomseed`).then((r) => {
      setMatchups(r.data);
    });
  }

  function handleSaveSeed() {
    axios.post(`bracket/${bracket!.id}/saveseed`, matchups).then((r) => {
      console.log('save seed')
    });
  }

  function handleExecuteCurrentRound() {
    axios.post(`bracket/${bracket!.id}/saveseed`, matchups).then((r) => {
      console.log('save seed')
    });
  }

  return <div style={{overflowY: 'auto', height: '100%'}}>
    {bracket &&
      <div>
        {bracket.phase === 'CreatureSubmission' && <Stack spacing={2}>
          <Button variant='contained' onClick={handleSeed}>{matchups.length > 0 ? 'Randomize' : 'Seed'}</Button>

          {matchups.map((m) =>
            <Paper key={matchups.indexOf(m)} style={{padding: '1em'}}>
                <Typography>Matchup #{matchups.indexOf(m) + 1}</Typography>
                <Typography>{m.creature1Seed} {m.creature1Name} VS {m.creature2Seed} {m.creature2Name}</Typography>
            </Paper>
          )}

          <Button variant='contained' onClick={handleSaveSeed}>Save Seeding</Button>
        </Stack>}
        {bracket.phase === 'Seeded' &&
          <Button variant='contained' onClick={handleExecuteCurrentRound}>Commence Round {bracket.matchups[bracket.matchups.length - 1].round} Battles</Button>
        }
      </div>
    }
  </div>
};

export default Tools;
