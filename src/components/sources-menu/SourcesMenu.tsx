import React from 'react';

// hooks
import useArticlesData from '../../hooks/useArticlesData';

// types
// import { ArticleCategory } from '../../types/index';

export enum ArticleCategory {
  FASHION = 'fashion',
  SPORT = 'sport',
}

const SourcesMenu: React.FC = () => {
  const { setCategory } = useArticlesData();
  setCategory('elomelo');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.checked);
  };

  return (
    <div className="px-3 py-1 bg-light">
      <p>Data sources:</p>
      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckDefault">
          <input
            className="form-check-input"
            type="checkbox"
            name="el"
            value=""
            id="flexCheckDefault"
            onChange={handleChange}
          />
          { ArticleCategory.FASHION }
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckChecked">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            onChange={handleChange}
          />
          { ArticleCategory.SPORT }
        </label>
      </div>
    </div>
  );
};

export default SourcesMenu;
