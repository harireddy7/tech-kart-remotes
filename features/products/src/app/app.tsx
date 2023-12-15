import { Box, Typography } from '@mui/material';
import { styled } from 'styled-components';
import Dashboard from '../components/Dashboard';

type Product = {
  id: string;
  name: string;
  type: string;
};

const Heading = styled(Typography)`
  font-weight: bold;
  text-align: center;
  color: darkslategray;
`;

const App = () => {
  sessionStorage.setItem('__TK_PRODUCTS__', JSON.stringify(PRODUCTS));

  return (
    <Box className='App' p={2}>
      <Box px={2} py={2} bgcolor='#eff6ff' mx='auto'>
        <Heading variant='h4'>Products</Heading>
      </Box>
      <Dashboard />
    </Box>
  );
};

export default App;

const PRODUCTS: Product[] = [
  {
    id: '1701970697485',
    name: 'Iphone 15',
    type: 'mobile',
  },
  {
    id: '1701970710586',
    name: 'ASUS TUF Gaming',
    type: 'laptop',
  },
  {
    id: '1701970717386',
    name: 'Noise Fit Buzz',
    type: 'watch',
  }
];
