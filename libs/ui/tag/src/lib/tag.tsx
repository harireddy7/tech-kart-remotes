import { Chip, Typography } from '@mui/material';
import './tag.css';

export function Tag() {
  return (
    <>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </>
  );
}

export default Tag;
