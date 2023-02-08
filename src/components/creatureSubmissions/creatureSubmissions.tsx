import { Add, Close, Favorite, FavoriteBorder, Save } from '@mui/icons-material';
import { Stack, Button, Grid, Typography, Paper, Checkbox, IconButton, Avatar } from '@mui/material';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { ICreatureSubmission } from '../../interfaces/models/creatureSubmission';
import { useAppSelector } from '../../state/hooks';
import { BracketState } from '../../state/slices/bracket';
import CreatureSubmission from '../creatureSubmission/creatureSubmission';

interface CreatureSubmissionsProps {}

const CreatureSubmissions: FC<CreatureSubmissionsProps> = (props) => {
  const [open, setOpen] = useState(false);
  const [creatureSubmissions, setCreatureSubmissions] = useState<ICreatureSubmission[]>([]);

  const { bracket } = useAppSelector(BracketState);

  useEffect(() => {
    if (bracket) {
      axios.get(`creaturesubmission/${bracket.id}`).then((r) => {
        setCreatureSubmissions(r.data);
      });
    }
  }, [bracket]);

  return <Stack style={{height: '100%', overflowY: 'auto'}} spacing={2}>
    <Grid container spacing={2}>
      {creatureSubmissions.map((cs) =>
        <Grid item key={cs.id}>
          <Paper elevation={3}>
            <Stack spacing={2} style={{padding: '.5em', width: '14em'}}>
              <Stack spacing={2}>
                <Stack direction='row'>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => console.log('kill')}
                    style={{margin: 0, marginBottom: 'auto'}}
                  >
                    <Close />
                  </IconButton>
                  <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <Avatar src={cs.image} sx={{height: 80, width: 80}}/>
                  </div>
                  <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} style={{marginBottom: 'auto'}}/>
                </Stack>
                <Typography fontSize='16pt' textAlign='center'>{cs.name}</Typography>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      )}
    </Grid>

    <div style={{height: '100%'}}/>

    <Button variant='contained' endIcon={<Add/>} onClick={() => setOpen(true)}>New Submission</Button>

    {bracket && <CreatureSubmission open={open} onClose={() => setOpen(false)}/>}
  </Stack>
};

export default CreatureSubmissions;
