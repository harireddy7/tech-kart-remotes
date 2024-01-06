import { Box, Typography } from '@mui/material';
import { styled } from 'styled-components';
import { TagUI } from '@ext-tech-kart/ui/tag';

const Heading = styled(Typography)`
  font-weight: bold;
  text-align: center;
  color: darkslategray;
`;

const Wrapper = styled(Box)`
  border: 1px solid #ccc;
`;

const App = () => {
  return (
    <Box className='App' p={2}>
      <Box px={2} py={1} bgcolor='#beffd3' mx='auto'>
        <Heading variant='h4'>CART</Heading>
      </Box>
      <Box p={2}>
        <Box p={2} mx='auto'>
          <Wrapper p={3} m={3}>
            <Typography variant='h4'>TagUI</Typography>
            <TagUI title='cart' />
          </Wrapper>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
