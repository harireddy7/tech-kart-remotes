import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Card } from '@ext-tech-kart/ui';

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
              <Card
                title={product.name}
                description={product.type}
                buttons={[
                  {
                    text: cart.find((p: Product) => p.id === product.id) ? 'Remove' : 'Add to cart',
                    onClick: () => handleAddProduct(product),
                  },
                ]}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
