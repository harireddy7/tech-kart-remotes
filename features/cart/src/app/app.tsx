import { Box, Typography, Grid, Skeleton } from '@mui/material';

export function App() {
  return (
    <Box p={2}>
      <Typography variant='h4' p={2} sx={{ background: '#cceeff', textAlign: 'center' }}>
        Cart
      </Typography>
      <Grid container columns={{ xs: 3, sm: 4, md: 5 }}>
        {Array(5)
          .fill(1)
          .map((_, index) => (
            <Grid item p={2} key={index} sx={{ minWidth: 300 }}>
              <Skeleton animation='wave' variant='rectangular' height={118} />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton animation='wave' />
                <Skeleton animation='wave' />
                <Skeleton animation='wave' sx={{ height: '3rem' }} />
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default App;
