import React from 'react';

// styles
import { ArticleListMessageStyled } from './styles';

type Props = {
    readonly message: string;
    // eslint-disable-next-line react/require-default-props
    readonly mode?: 'error';
}

const ArticleListMessage: React.FC<Props> = ({ message, mode }: Props) => (
  <ArticleListMessageStyled mode={mode}>{ message }</ArticleListMessageStyled>
);

export default ArticleListMessage;
