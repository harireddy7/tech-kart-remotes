import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { Card } from '@ui/card';
// import { getUniqueId } from '@ext-tech-kart/utils';
import { GlobalType } from '@utils/types/global';

const Wrapper = styled(Box)`
  border: 1px solid #ccc;
`;

const Dashboard = () => {
  const feature: GlobalType = {
    feature: 'products',
  };
  return (
    <Box p={2}>
      <Box p={2} mx='auto'>
        <Wrapper p={3} m={3}>
          <Typography variant='h4'>CardUI</Typography>
          <Card />
        </Wrapper>
      </Box>
    </Box>
  );
};

export default Dashboard;
