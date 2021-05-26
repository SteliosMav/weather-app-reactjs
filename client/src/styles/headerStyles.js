import { Button, AppBar } from '@material-ui/core';
import styled from 'styled-components';
import colors from './colors';

export const HeaderAppBar = styled(AppBar)`
  background-color: #324a7d;
`;
export const HeaderButton = styled(Button)`
  color: white;
  color: ${(props) => (props.active ? colors.green : 'white')};

  &:hover {
    color: ${colors.green};
  }
`;
