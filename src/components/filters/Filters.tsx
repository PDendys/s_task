import React from 'react';

// hooks
import useArticles from '../../hooks/useArticles';

// types
import { SortMode } from '../../types';

// styles
import { FiltersStyled, FiltersButtonStyled } from './styles';

const Filters: React.FC = () => {
  const { sortMode, setSortMode } = useArticles();
  return (
    <FiltersStyled>
      <p className="label mb-0 me-2 me-lg-3">Sort by date</p>
      <div className="sorter-box">
        <FiltersButtonStyled
          direction="up"
          title={SortMode.ASC}
          isActive={sortMode === SortMode.ASC}
          onClick={() => setSortMode(SortMode.ASC)}
        />
        <FiltersButtonStyled
          direction="down"
          title={SortMode.DESC}
          isActive={sortMode === SortMode.DESC}
          onClick={() => setSortMode(SortMode.DESC)}
        />
      </div>
    </FiltersStyled>
  );
};

export default Filters;
