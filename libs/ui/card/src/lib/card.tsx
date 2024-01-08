import { Typography } from '@mui/material';
import './card.css';

export interface CardProps {
  title: string;
}

export function Card({ title }: CardProps) {
  return (
    <Typography variant='h5' color='green' pt={2}>
      👉 Card.tsx from {title}
    </Typography>
  );
}

export default Card;
