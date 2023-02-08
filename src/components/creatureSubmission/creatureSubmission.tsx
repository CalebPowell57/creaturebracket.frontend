import { Clear, Save } from '@mui/icons-material';
import { Button, Dialog, DialogTitle, Stack, TextField } from '@mui/material';
import axios from 'axios';
import React, { FC, useState } from 'react';
import { ICreatureSubmission } from '../../interfaces/models/creatureSubmission';
import { useAppSelector } from '../../state/hooks';
import { BracketState } from '../../state/slices/bracket';
import styles from './creatureSubmission.module.css';

interface CreatureSubmissionProps {
  open: boolean;
  onClose: () => void;
}

const CreatureSubmission: FC<CreatureSubmissionProps> = (props) => {
  const { bracket } = useAppSelector(BracketState);

  const empty: ICreatureSubmission = {
    name: '',
    image: '',
    bracketId: bracket!.id as number,
    votes: [],
  };

  const [creatureSubmission, setCreatureSubmission] = useState<ICreatureSubmission>(empty);

  const handleClose = () => {
    props.onClose();
  };

  const handleSave = () => {
     axios.post('creaturesubmission', creatureSubmission).then((r) => {
      setCreatureSubmission(r.data);
     });

    props.onClose();
  };

  return <Dialog onClose={handleClose} open={props.open}>
    <DialogTitle>Creature Submission</DialogTitle>

    <Stack spacing={2} style={{margin: '1em'}}>
      <TextField value={creatureSubmission.name} onChange={(e) => setCreatureSubmission({...creatureSubmission, name: e.target.value})}/>

      <Button variant='outlined' endIcon={<Clear/>} onClick={handleClose}>Clear</Button>
      <Button variant='contained' endIcon={<Save/>} onClick={handleSave}>Save</Button>
    </Stack>
  </Dialog>
};

export default CreatureSubmission;
