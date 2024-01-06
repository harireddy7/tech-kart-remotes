import Typography from '@mui/material/Typography';

interface TagProps {
  title: string;
}

export const TagUI = ({ title }: TagProps) => {
  return (
    <Typography color='red' py={1} variant='h6' component='div'>
      Tag From {title}
    </Typography>
  );
};
