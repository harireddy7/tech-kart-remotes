import Typography from '@mui/material/Typography';

interface CardProps {
  title: string;
}

export const CardUI = ({ title }: CardProps) => {
  return (
    <Typography color='red' py={1} variant='h6' component='div'>
      Card From {title}
    </Typography>
  );
};
