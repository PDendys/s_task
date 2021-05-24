/**
 * Models
 */
export interface IArticle {
  id: number;
  date: string;
  image: string;
  category: ArticleCategory;
  title: string;
  preamble: string;
}

/**
 * Enums
 */
export enum ArticleCategory {
  FASHION = 'fashion',
  SPORTS = 'sports',
}

export enum SortMode {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum NorwegianMonths {
  JANUARY = 'januar',
  FEBRUARY = 'februar',
  MARCH = 'mars',
  APRIL = 'april',
  MAY = 'mai',
  JUNE = 'juni',
  JULY = 'juli',
  AUGUST = 'august',
  SEPTEMBER = 'september',
  OCTOBER = 'oktober',
  NOVEMBER = 'november',
  DECEMBER = 'desember',
}

export enum EnglishMonths {
  JANUARY = 'january',
  FEBRUARY = 'february',
  MARCH = 'march',
  APRIL = 'april',
  MAY = 'may',
  JUNE = 'june',
  JULY = 'july',
  AUGUST = 'august',
  SEPTEMBER = 'september',
  OCTOBER = 'october',
  NOVEMBER = 'november',
  DECEMBER = 'december',
}

export enum Breakpoints {
  XXL = '1480px',
  XL = '1200px',
  LG = '992px',
  MD = '768px',
  SM = '576px',
}
