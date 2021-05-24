import styled from 'styled-components';

// types
import { Breakpoints } from '../../types';

const ArticleStyled = styled.div`
  margin: 0 0 10px;
  padding: 10px 15px;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);

  .heading {
    font-size: 18px;
    font-weight: 500;
    
    @media (min-width: ${Breakpoints.XL}) {
      font-size: 22px;
    }
  }
`;

export default ArticleStyled;
