import React from 'react';

// types
import {
  IArticle, SortMode, NorwegianMonths, EnglishMonths,
} from '../types';

const useSorter = (data: IArticle[], mode: SortMode): IArticle[] => {
  const [sortedData, setSortedData] = React.useState<IArticle[]>(data);

  /**
   * Convert date to comparable one
   * - Norwegian months are replaced
   * - Shape of string is formatted
   *
   * @param date (string)
   */
  const toComparableDate = (date: string): string => {
    for (const month in NorwegianMonths) {
      const monthIndex = month as keyof typeof NorwegianMonths;
      const norwegian = NorwegianMonths[monthIndex];
      const english = EnglishMonths[monthIndex];
      if (date.includes(norwegian)) {
        /**
         * .split('.').join('') - to fix safari and firefox
         * It`s ugly solution. Think about using some time manipulation library
         */
        return date.replace(norwegian, english).split('.').join('');
      }
    }
    return date;
  };

  React.useEffect(() => {
    if (mode === 'ASC') {
      const sorted = [...data].sort(
        (a: IArticle, b: IArticle) => new Date(toComparableDate(b.date)).getTime() - new Date(toComparableDate(a.date)).getTime(),
      );
      setSortedData(sorted);
    }

    if (mode === 'DESC') {
      const sorted = [...data].sort(
        (a: IArticle, b: IArticle) => new Date(toComparableDate(a.date)).getTime() - new Date(toComparableDate(b.date)).getTime(),
      );
      setSortedData(sorted);
    }
  }, [data, mode]);

  return sortedData;
};

export default useSorter;
