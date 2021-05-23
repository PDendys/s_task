export enum ArticleCategory {
  FASHION = 'fashion',
  SPORT = 'sport',
}

// Models
export interface IArticle {
  id: number;
  date: string;
  image: string;
  category: ArticleCategory;
  title: string;
  preamble: string;
}
