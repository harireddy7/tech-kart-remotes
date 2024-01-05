import { Box } from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled(Box)`
  border: 1px solid #ccc;
`;

const Dashboard = () => {
  return (
    <Box p={2}>
      <Box p={2} mx='auto'>
        <Wrapper p={3} m={3}>
          <header>CardUI</header>
        </Wrapper>

        <Wrapper p={3} m={3}>
          <header>TextUI</header>
        </Wrapper>

        <Wrapper p={3} m={3}>
          <header>ButtonUI</header>
        </Wrapper>
      </Box>
    </Box>
  );
};

export default Dashboard;
