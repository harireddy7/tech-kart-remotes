// import { getApiResponse } from '@ext-tech-kart/utils';
import { Box, Typography } from '@mui/material';
import { Tag } from '@ui/tag';
import { styled } from 'styled-components';

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
      <Box px={2} py={2} bgcolor='#befff9' mx='auto'>
        <Heading variant='h4'>CART</Heading>
      </Box>
      <Box p={2}>
        <Box p={2} mx='auto'>
          <Wrapper p={3} m={3} display='flex' gap='2rem'>
            {TAGS.map((tag, idx) => (
              <Tag key={tag} label={tag} variant={idx % 2 === 0 ? 'filled' : 'outlined'} />
            ))}
          </Wrapper>
        </Box>
      </Box>
    </Box>
  );
};

export default App;

const TAGS = ['mobile', 'watch', 'laptop'];
