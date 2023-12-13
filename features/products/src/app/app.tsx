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
  const _products = sessionStorage.getItem('__TK_PRODUCTS__');
  if (!_products) {
    sessionStorage.setItem('__TK_PRODUCTS__', JSON.stringify(PRODUCTS));
  }

  return (
    <div className='App'>
      <Box px={2} py={2} bgcolor='#eff6ff' mx='auto'>
        <Heading variant='h4'>Products</Heading>
      </Box>
      <Dashboard />
    </div>
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
  },
  {
    id: '1701970726283',
    name: 'Oneplus Nord Buds 2',
    type: 'earbuds',
  },
  {
    id: '1702132651765',
    name: 'Lenovo FHD IPS',
    type: 'monitor',
  },
];
