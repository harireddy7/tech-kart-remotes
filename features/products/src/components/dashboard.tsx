import { Box } from '@mui/material';
import styled from 'styled-components';
import { Card } from '@ui/card';

const Wrapper = styled(Box)`
  border: 1px solid #a6a5e4;
`;

const Dashboard = () => {
  return (
    <Box p={2}>
      <Box
        p={2}
        mx='auto'
        display='grid'
        gridTemplateColumns='repeat(auto-fill, minmax(320px, 1fr))'
      >
        {PRODUCTS.map((product) => (
          <Wrapper p={3} m={3} maxWidth='300px' key={product.title}>
            <Card title={product.title} description={product.type} />
          </Wrapper>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;

const PRODUCTS = [
  {
    title: 'Iphone 15',
    type: 'mobile',
  },
  {
    title: 'Noise Fit Buzz',
    type: 'watch',
  },
];
