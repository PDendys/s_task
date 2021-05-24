import { apiHost, routes } from './config';

// types
import { IArticle } from '../types';

const get = async (category: string): Promise<{ articles: IArticle[] }> => {
  const path = `${apiHost}${routes.getArticles}${category}`;
  // eslint-disable-next-line no-undef
  const response = await fetch(path);
  if (response.status >= 200 && response.status <= 299) {
    return await response.json();
  }
  throw new Error(response.statusText);
};

const api = {
  get,
};

export default api;
