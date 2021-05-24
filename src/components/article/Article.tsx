import React from 'react';

// components
import Badge from '../ui/badge';

// types
import { IArticle, ArticleCategory } from '../../types';

// styles
import ArticleStyled from './styles';

type Props = {
  readonly article: IArticle;
}

const Article: React.FC<Props> = ({ article }: Props) => {
  const {
    title, date, image, category, preamble,
  } = article;
  return (
    <ArticleStyled>
      <div className="row">
        <div className="col-12 col-lg-3 text-center">
          <div className="position-relative d-inline-block">
            <img
              className="img-fluid"
              src={image || 'https://dummyimage.com/280x180/c2c2c2/000000&text=Image+not+found'}
              alt={title}
            />
            <Badge
              label={category}
              bcgColor={category === ArticleCategory.FASHION ? 'aquamarine' : '#74b9ff'}
            />
          </div>
        </div>
        <div className="col-12 col-lg-9">
          <div className="row">
            <div className="col-12 col-lg-8 order-2 order-lg-1 mt-2 mt-lg-0">
              <h2 className="heading">{title}</h2>
            </div>
            <div className="col-12 col-lg-4 text-end order-1 order-lg-2 mt-2 mt-lg-0">
              <p className="mb-0">{date}</p>
            </div>
          </div>
          <p>{preamble}</p>
        </div>
      </div>
    </ArticleStyled>
  );
};

export default Article;
