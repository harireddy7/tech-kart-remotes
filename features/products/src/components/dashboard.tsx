import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
// import { Card } from '@ui/card';

const Wrapper = styled(Box)`
  border: 1px solid #ccc;
`;

const Dashboard = () => {
  return (
    <Box p={2}>
      <Box p={2} mx='auto'>
        <Wrapper p={3} m={3}>
          <Typography variant='h4'>CardUI</Typography>
        </Wrapper>
      </Box>
    </Box>
  );
};

export default Dashboard;
