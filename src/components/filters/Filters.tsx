import React from 'react';

// styles
import FiltersStyled from './styles';

const Filters: React.FC = () => (
  <FiltersStyled>
    <p className="label">Sort by date</p>
    <div className="sorter-box">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button className="btn -up" type="button" />
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button className="btn -down" type="button" />
    </div>
  </FiltersStyled>
);

export default Filters;
