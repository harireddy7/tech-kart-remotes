import { Chip } from '@mui/material';

type Props = {
  title: string;
};

export const Tag = ({ title }: Props) => {
  return <Chip label={title} variant='outlined' size='small' />;
};

export default Tag;
