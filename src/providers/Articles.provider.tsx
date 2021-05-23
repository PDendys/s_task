import React from 'react';

// types
import { IArticle } from '../types';

interface ArticlesData {
    articles: IArticle[];
}

interface IArticlesDataProvider {
    articlesData: ArticlesData;
    // eslint-disable-next-line no-unused-vars
    setCategory: (val: string) => void;
}

// eslint-disable-next-line max-len
const ArticlesDataProviderContext = React.createContext<IArticlesDataProvider>({} as IArticlesDataProvider);

type Props = {
    readonly children: React.ReactNode;
}

const ArticlesDataProvider: React.FC<Props> = ({ children }: Props): React.ReactElement => {
  const [articlesData, setArticlesData] = React.useState<ArticlesData>({} as ArticlesData);
  const [category, setCategory] = React.useState<string>('');

  React.useEffect(() => {
    console.log('ArticlesDataProvider effect');
    setArticlesData({} as ArticlesData);
  }, [category]);

  return (
    <ArticlesDataProviderContext.Provider value={{ articlesData, setCategory }}>
      { children }
    </ArticlesDataProviderContext.Provider>
  );
};

export {
  ArticlesDataProvider,
  ArticlesDataProviderContext,
};
