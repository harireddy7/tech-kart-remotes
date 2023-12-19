import { Box, Typography, Grid, Skeleton, Paper } from '@mui/material';
import { TagSkeleton } from '@ext-tech-kart/pub-ui';

export function App() {
  return (
    <Box p={2}>
      <Typography variant='h4' p={2} sx={{ background: '#cceeff', textAlign: 'center' }}>
        Cart
      </Typography>
      <Grid container columns={{ xs: 3, sm: 4, md: 5 }} spacing={1} mt={1}>
        {Array(5)
          .fill(1)
          .map((_, index) => (
            <Grid item p={2} key={index} sx={{ minWidth: 300 }}>
              <Paper sx={{ padding: 2 }}>
                <Skeleton
                  animation='wave'
                  variant='rectangular'
                  height={118}
                  sx={{ marginBottom: 1 }}
                />
                <TagSkeleton animation='wave' />
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton animation='wave' />
                  <Skeleton animation='wave' />
                  <Skeleton animation='wave' sx={{ height: '3rem' }} />
                </Box>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default App;
