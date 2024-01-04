import { Chip } from '@mui/material';

type Props = {
  title: string;
};

export const TagUI = ({ title }: Props) => {
  return <Chip label={title} variant='outlined' size='small' />;
};

