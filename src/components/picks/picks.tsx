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
      })
    }
  }, [bracket]);

  function handleWinnerSelected(newWinnerId: number, matchupRound: number, matchupRank: number) {
    const matchup = matchups.find((m) => m.round === matchupRound && m.rank === matchupRank);
    const round = matchup!.round + 1;
    const rank = Math.ceil(matchup!.rank / 2);
    const isFirst = (matchup!.rank / 2) % 1 !== 0;

    const newMatchup = matchups.find((m) => m.round === round && m.rank === rank) as IUserMatchup;

    if (isFirst) {
      newMatchup!.creature1 = newWinnerId === matchup!.creature1Id ? matchup!.creature1 : matchup!.creature2;
      newMatchup!.creature1Id = newWinnerId === matchup!.creature1Id ? matchup!.creature1Id : matchup!.creature2Id;
    } else {
      newMatchup!.creature2 = newWinnerId === matchup!.creature1Id ? matchup!.creature1 : matchup!.creature2;
      newMatchup!.creature2Id = newWinnerId === matchup!.creature1Id ? matchup!.creature1Id : matchup!.creature2Id;
    }

    const newMatchups = matchups.map((m) => m.round === round && m.rank === rank ? newMatchup : m);

    setMatchups(newMatchups);
  }

  return <>{bracket &&
    <div style={{display: 'flex', height: '100%', flexDirection: 'column', overflowY: 'auto'}}>
      <Stack spacing={4} style={{display: 'flex'}} direction='row'>
        <UserRound matchups={matchups.filter((m) => m.round === 1)} onWinnerSelected={handleWinnerSelected}/>
        <UserRound matchups={matchups.filter((m) => m.round === 2)} onWinnerSelected={handleWinnerSelected}/>
        <UserRound matchups={matchups.filter((m) => m.round === 3)} onWinnerSelected={handleWinnerSelected}/>
        <UserRound matchups={matchups.filter((m) => m.round === 4)} onWinnerSelected={handleWinnerSelected}/>
        <UserRound matchups={matchups.filter((m) => m.round === 5)} onWinnerSelected={handleWinnerSelected}/>
      </Stack>
    </div>
  }</>;
}

export default Picks;
