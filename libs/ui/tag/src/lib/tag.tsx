import { Chip } from '@mui/material';
import './tag.css';

interface Props {
  label: string;
  variant: 'filled' | 'outlined';
}

export function Tag({ label, variant }: Props) {
  return (
    <>
      <Chip label={label} variant={variant} />
    </>
  );
}

export default Tag;
