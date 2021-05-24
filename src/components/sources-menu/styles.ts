import styled from 'styled-components';

// types
import { Breakpoints } from '../../types';

const SourcesMenuStyled = styled.div`
  border-radius: 4px;
  
  @media (min-width: ${Breakpoints.LG}) {
    background-color: #f4f5f5;
  }
`;

export default SourcesMenuStyled;
