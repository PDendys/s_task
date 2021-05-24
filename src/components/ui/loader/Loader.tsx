import React from 'react';

const Loader: React.FC = () => (
  <div className="row">
    <div className="col-12 text-center mt-4">
      <div className="spinner-border text-secondary" role="status">
        <span className="sr-only" />
      </div>
    </div>
  </div>
);

export default Loader;
