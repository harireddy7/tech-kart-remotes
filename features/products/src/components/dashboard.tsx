import { CardUI } from '@ext-tech-kart/ui';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled(Box)`
  border: 1px solid #ccc;
`;

const Dashboard = () => {
  return (
    <Box p={2}>
      <Box p={2} mx='auto'>
        <Wrapper p={3} m={3}>
          <Typography variant='h4'>CardUI</Typography>
          <CardUI title='products' />
        </Wrapper>
      </Box>
    </Box>
  );
};

export default Dashboard;
