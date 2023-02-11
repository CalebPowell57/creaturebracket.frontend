import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { navigationItems } from '../../constants/navigationItems';
import { PHASE } from '../../constants/phase';
import { useAppSelector } from '../../state/hooks';
import { BracketState } from '../../state/slices/bracket';
import styles from './bottomBar.module.css';

interface BottomBarProps {}

const BottomBar: FC<BottomBarProps> = () => {
  const [bottomNavigationSelected, setBottomNavigationSelected] = useState('');

  const { bracket } = useAppSelector(BracketState);

  const navigate = useNavigate();

  return (
    <div className={styles.BottomBar}>
      <Paper elevation={3}>
        <BottomNavigation
          style={{overflowX: 'clip'}}
          showLabels
          value={bottomNavigationSelected}
          onChange={(event, newValue) => {
            navigate(newValue);
            setBottomNavigationSelected(newValue);
          }}>
            {
              navigationItems
                .filter((i) => i.hasNavigation && bracket && (!i.phasesShown || i.phasesShown.includes(bracket!.phase)))
                .map((i) => <BottomNavigationAction label={`${i.title}`} icon={i.icon} value={`${i.path}`} key={`${i.path}`}/>)
            }
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default BottomBar;
