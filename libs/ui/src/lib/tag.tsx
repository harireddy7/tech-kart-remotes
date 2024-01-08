import { Typography } from '@mui/material';
import './tag.css';

export interface TagProps {
  title: string;
}

export function Tag({ title }: TagProps) {
  return (
    <Typography variant='h5' color='red' pt={2}>
      👉 Tag.tsx from {title} [updated]
    </Typography>
  );
}

export default Tag;
