import { Table } from '@mui/material';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../state/hooks';
import { BracketState } from '../../state/slices/bracket';

interface StandingsProps {}

const Standings: FC<StandingsProps> = () => {
  const [standings, setStandings] = useState([]);

  const { bracket } = useAppSelector(BracketState);

  useEffect(() => {
    if (bracket) {
      axios.get(`bracket/${bracket.id}`).then((r) => {
        setStandings(r.data);
      })
    }
  }, [bracket]);

  return <>
    <Table>
      
    </Table>
  </>
};

export default Standings;
