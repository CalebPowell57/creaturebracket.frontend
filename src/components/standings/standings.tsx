import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../state/hooks';
import { BracketState } from '../../state/slices/bracket';

interface StandingsProps {}

interface IStandingItem {
  user: string;
  rank: number;
  points: number;
}

const Standings: FC<StandingsProps> = () => {
  const [standings, setStandings] = useState<IStandingItem[]>([]);

  const { bracket } = useAppSelector(BracketState);

  useEffect(() => {
    if (bracket) {
      axios.get(`bracket/standings/${bracket.id}`).then((r) => {
        setStandings(r.data);
        console.log(r.data);
      })
    }
  }, [bracket]);

  return <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell align="right">User</TableCell>
            <TableCell align="right">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {standings.map((si) => (
            <TableRow
              key={si.user}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {si.rank}
              </TableCell>
              <TableCell align="right">{si.user}</TableCell>
              <TableCell align="right">{si.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
};

export default Standings;
