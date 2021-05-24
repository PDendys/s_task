export const enum ArticleCategory {
  FASHION = 'fashion',
  SPORTS = 'sports',
}

export const enum OneTwoThreeEnum { One = 'one', Two = 'two', Three = 'three' }

export type SortMode = 'ASC' | 'DESC';

// Models
export interface IArticle {
  id: number;
  date: string;
  image: string;
  category: ArticleCategory;
  title: string;
  preamble: string;
}
