import { Typography } from '@mui/material';
import './card.css';

interface Props {
  title: string;
  description?: string;
}

export function Card({ title, description }: Props) {
  return (
    <div>
      <Typography variant='h4'>{title}</Typography>
      <Typography variant='body1' color='GrayText'>
        {description}
      </Typography>
    </div>
  );
}

export default Card;
