import { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
// import { Card } from '@tech-kart-nx/ui';

type Product = {
  id: string;
  name: string;
  type: string;
};

const Dashboard = () => {
  const products = JSON.parse(sessionStorage.getItem('__TK_PRODUCTS__') || '[]');
  const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem('__TK_CART__') || '[]'));

  const handleAddProduct = (product: Product) => {
    if (Array.isArray(cart)) {
      let revisedCart = [...cart];
      if (cart.find((p) => p.id === product.id)) {
        revisedCart = cart.filter((p) => p.id !== product.id);
      } else {
        revisedCart = [...cart, product];
      }
      setCart(revisedCart);
      sessionStorage.setItem('__TK_CART__', JSON.stringify(revisedCart));
    }
  };

  return (
    <Box p={2}>
      <Box p={2} mx='auto'>
        <header className='flex justify-end my-4'></header>
        <Grid container spacing={2}>
          {products.map((product: Product) => (
            <Grid item key={product.id}>
              <Card sx={{ width: 300, padding: 4 }}>
                <CardContent>
                  <Typography variant='h6'>{product.name}</Typography>
                  <Typography variant='body2'>{product.type}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size='small'
                    onClick={() => handleAddProduct(product)}
                    variant='contained'
                    color='success'
                    sx={{ width: '100%' }}
                  >
                    {cart.find((p: Product) => p.id === product.id) ? 'Remove' : 'Add to cart'}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
