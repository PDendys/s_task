import React from 'react';

// components
import Article from '../article';
import MessageBox from '../ui/message-box';
import Loader from '../ui/loader';

// hooks
import useArticles from '../../hooks/useArticles';
import useSorter from '../../hooks/useSorter';

// types
import { IArticle } from '../../types';

const ArticleList: React.FC = () => {
  const {
    articles, categories, sortMode, isLoading, errors,
  } = useArticles();
  const sortedArticles = useSorter(articles, sortMode);

  if (isLoading) {
    return <Loader />;
  }

  if (errors) {
    return <MessageBox message={errors} mode="error" />;
  }

  if (!articles.length && !categories.length) {
    return <MessageBox message="Please choose data source" />;
  }

  if (!articles.length) {
    return <MessageBox message="Nothing to display" />;
  }

  return (
    <>
      {sortedArticles.map((article: IArticle) => <Article key={article.id} article={article} />)}
    </>
  );
};

export default ArticleList;
