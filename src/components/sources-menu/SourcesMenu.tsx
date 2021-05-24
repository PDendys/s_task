import React from 'react';

// hooks
import useArticles from '../../hooks/useArticles';

// types
import { ArticleCategory } from '../../types';

// styles
import SourcesMenuStyled from './styles';

const SourcesMenu: React.FC = () => {
  const { categories, setCategories } = useArticles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const choosedCategory = e.target.name;
    const computed = e.target.checked
      ? [...categories, choosedCategory]
      : categories.filter((category: string) => category !== choosedCategory);

    setCategories(computed);
  };

  return (
    <SourcesMenuStyled>
      <div className="px-1 px-lg-3 py-1 d-flex flex-wrap d-lg-block">
        <p className="w-100">Data sources:</p>
        <div className="form-check w-50">
          <label className="form-check-label" htmlFor={ArticleCategory.FASHION}>
            <input
              className="form-check-input"
              type="checkbox"
              id={ArticleCategory.FASHION}
              name={ArticleCategory.FASHION}
              onChange={handleChange}
            />
            {ArticleCategory.FASHION}
          </label>
        </div>
        <div className="form-check w-50">
          <label className="form-check-label" htmlFor={ArticleCategory.SPORTS}>
            <input
              className="form-check-input"
              type="checkbox"
              id={ArticleCategory.SPORTS}
              name={ArticleCategory.SPORTS}
              onChange={handleChange}
            />
            { ArticleCategory.SPORTS }
          </label>
        </div>
      </div>
    </SourcesMenuStyled>
  );
};

export default SourcesMenu;
