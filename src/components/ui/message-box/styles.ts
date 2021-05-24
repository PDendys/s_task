import styled from 'styled-components';

const MessageBoxStyled = styled.div<{ mode?: 'error' }>`
  font-size: 18px;
  padding: 3px 10px;
  border-radius: 3px;
  color: ${({ mode }) => (mode === 'error' ? '#fff' : '#000')}};
  background-color: ${({ mode }) => (mode === 'error' ? 'indianred' : 'transparent')}};
`;

export default MessageBoxStyled;
