import { default as MaterialCard } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type CardButton = {
  text: string;
  onClick: () => void;
};

interface CardProps {
  title: string;
  description?: string;
  buttons: CardButton[];
}

export const Card = ({ title, description, buttons = [] }: CardProps) => {
  return (
    <MaterialCard sx={{ width: 300, padding: 4 }}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        {description && (
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {Array.isArray(buttons) &&
          buttons.map(({ text, onClick }, index) => (
            <Button
              size='small'
              color='success'
              variant='contained'
              key={index}
              onClick={onClick}
              sx={{ width: '100%' }}
            >
              {text}
            </Button>
          ))}
      </CardActions>
    </MaterialCard>
  );
};
