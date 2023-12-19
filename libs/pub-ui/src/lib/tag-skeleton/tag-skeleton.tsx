import { Skeleton } from '@mui/material';
import { styled } from 'styled-components';

const StyledTagSekeleton = styled(Skeleton)``;

type Props = {
  animation: 'wave' | 'pulse';
};

export const TagSkeleton = ({ animation }: Props) => {
  return <StyledTagSekeleton variant='rounded' animation={animation} />;
};
