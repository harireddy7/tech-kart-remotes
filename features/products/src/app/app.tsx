import { Box, Typography } from '@mui/material';
import { styled } from 'styled-components';
import Dashboard from '../components/dashboard';

const Heading = styled(Typography)`
  font-weight: bold;
  text-align: center;
  color: darkslategray;
`;

const App = () => {
  return (
    <Box className='App' p={2}>
      <Box px={2} py={1} bgcolor='#beffd3' mx='auto'>
        <Heading variant='h4'>Products</Heading>
      </Box>
      <Dashboard />
    </Box>
  );
};

export default App;
