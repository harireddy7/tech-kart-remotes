import { Box, Typography } from '@mui/material';

export function App() {
  return (
    <Box p={2} sx={{ textAlign: 'center' }}>
      <Typography variant='h4' p={2} sx={{ background: '#d7ec9c', textAlign: 'center' }}>Cart</Typography>
      <Typography p={2}>
        Adding hotfix to cart-v1.0.0
      </Typography>
    </Box>
  );
}

export default App;
