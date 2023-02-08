import { Clear, Label, Save } from '@mui/icons-material';
import { Stack, TextField, MenuItem, Select, Button, FormLabel, FormControl, InputLabel, DialogTitle, Dialog } from '@mui/material';
import axios from 'axios';
import React, { FC, useState } from 'react';
import { IBracketDto } from '../../interfaces/dto/post/bracketDto';
import { IBracket } from '../../interfaces/models/bracket';

interface NewBracketProps {
  open: boolean;
  onClose: () => void;
}

const NewBracket: FC<NewBracketProps> = (props) => {
  const empty: IBracketDto = {
    creatureCount: 0,
    name: '',
  };

  const [bracket, setBracket] = useState<IBracketDto>(empty);

  const handleClose = () => {
    props.onClose();
  };

  const handleSave = () => {
     axios.post('bracket', bracket).then((r) => {
      console.log('saved');
     });

    props.onClose();
  };

  return <Dialog onClose={handleClose} open={props.open}>
    <DialogTitle>New Bracket</DialogTitle>
    <Stack style={{height: '100%'}} spacing={2}>
      <TextField onChange={(e) => setBracket({...bracket, name: e.target.value})} value={bracket.name} label='Name' style={{marginTop: '1em'}}/>
      <FormControl>
        <InputLabel>Creature Count</InputLabel>
        <Select label='Creature Count' value={bracket.creatureCount} onChange={(e) => setBracket({...bracket, creatureCount: e.
          target.value as number})}>
          <MenuItem value={64}>64</MenuItem>
          <MenuItem value={32}>32</MenuItem>
          <MenuItem value={16}>16</MenuItem>
        </Select>
      </FormControl>

      <div style={{height: '100%'}}/>

      <Button variant='outlined' endIcon={<Clear/>}>Clear</Button>
      <Button variant='contained' endIcon={<Save/>} onClick={() => axios.post('bracket', bracket)}>Save</Button>
    </Stack>
  </Dialog>
};

export default NewBracket;
