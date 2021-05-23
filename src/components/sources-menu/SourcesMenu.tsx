import React from 'react';

const SourcesMenu: React.FC = () => (
  <div className="px-3 py-1 bg-light mt-5">
    <p>Data sources:</p>
    <div className="form-check">
      <label className="form-check-label" htmlFor="flexCheckDefault">
        <input
          className="form-check-input"
          type="checkbox"
          name="el"
          value=""
          id="flexCheckDefault"
        />
        Default checkbox
      </label>
    </div>
    <div className="form-check">
      <label className="form-check-label" htmlFor="flexCheckChecked">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
        Checked checkbox
      </label>
    </div>
  </div>
);

export default SourcesMenu;
