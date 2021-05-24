import React from 'react';

// styles
import MessageBoxStyled from './styles';

type Props = {
    readonly message: string;
    // eslint-disable-next-line react/require-default-props
    readonly mode?: 'error';
}

const MessageBox: React.FC<Props> = ({ message, mode }: Props) => (
  <MessageBoxStyled mode={mode}>{ message }</MessageBoxStyled>
);

export default MessageBox;
