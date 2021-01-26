import React from 'react';
import { Box, Paper } from '@material-ui/core';
import { FeatureStepper } from 'components';

export const Main: React.FC = () => (
  <Paper elevation={0}>
    <Box p={2} mt={5}>
      <FeatureStepper />
    </Box>
  </ Paper>
);
