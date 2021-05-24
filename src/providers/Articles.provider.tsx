import React from 'react';

// helpers
import ApiService from '../api';

// types
import { IArticle, SortMode } from '../types';

interface IArticlesDataProvider {
    articles: IArticle[];
    categories: string[];
    // eslint-disable-next-line no-unused-vars
    setCategories: (val: string[]) => void;
    sortMode: SortMode;
    // eslint-disable-next-line no-unused-vars
    setSortMode: (mode: SortMode) => void;
    isLoading: boolean;
    errors?: string;
}

const ArticlesDataProviderContext = React.createContext<IArticlesDataProvider>({} as IArticlesDataProvider);

type Props = {
    readonly children: React.ReactNode;
}

const ArticlesDataProvider: React.FC<Props> = ({ children }: Props): React.ReactElement => {
  const [articles, setArticles] = React.useState<IArticle[]>([]);
  const [categories, setCategories] = React.useState<string[]>([]);
  const [sortMode, setSortMode] = React.useState<SortMode>(SortMode.ASC);
  const [errors, setErrors] = React.useState<string>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoading(true);
      setArticles([]);
      setErrors('');
      try {
        for (const category of categories) {
          // eslint-disable-next-line no-await-in-loop
          const fetchedArticles = await ApiService.get(category);
          setArticles((prevState) => [...prevState, ...fetchedArticles.articles]);
        }
      } catch (e) {
        setErrors('Error occured, please try later;(');
      }
    };

    if (categories) {
      getData().finally(() => setIsLoading(false));
    }
  }, [categories]);

  return (
    <ArticlesDataProviderContext.Provider value={{
      articles, categories, setCategories, sortMode, setSortMode, isLoading, errors,
    }}
    >
      { children }
    </ArticlesDataProviderContext.Provider>
  );
};

export {
  ArticlesDataProvider,
  ArticlesDataProviderContext,
};
