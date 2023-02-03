import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { navigationItems } from '../../constants/navigationItems';

interface RouterProps {}

const Router: FC<RouterProps> = () => {
  return (
    <div style={{margin: '1em', height: '100%', overflowY: 'clip'}}>
    <Routes>
      {navigationItems.map((i) =>
        <Route path={i.path} element={i.node} key={i.path} />
      )}
    </Routes>
    </div>
  );
};

export default Router;
