import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { Card } from '@ui/card';
import { getUniqueId } from '@ext-tech-kart/utils';

const Wrapper = styled(Box)`
  border: 1px solid #ccc;
`;

const Dashboard = () => {
  return (
    <Box p={2}>
      <Box p={2} mx='auto'>
        <Wrapper p={3} m={3}>
          <Typography variant='h4'>CardUI</Typography>
          <Card />
          <p>Unique ID: {getUniqueId()}</p>
        </Wrapper>
      </Box>
    </Box>
  );
};

export default Dashboard;
