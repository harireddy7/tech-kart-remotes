import { Chip } from '@mui/material';

interface Props {
  label: string;
  variant: 'filled' | 'outlined';
}

export function Tag({ label, variant }: Props) {
  return <Chip label={label} variant={variant} />;
}

export default Tag;
