import { Skeleton } from '@mui/material';
import { styled } from 'styled-components';

const StyledTagSekeleton = styled(Skeleton)`
  border-radius: 12px;
  width: 40px;
  padding: 2px 7px;
`;

type Props = {
  animation: 'wave' | 'pulse';
};

export const TagSkeleton = ({ animation }: Props) => {
  return <StyledTagSekeleton variant='rounded' animation={animation} />;
};
