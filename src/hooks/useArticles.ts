import React from 'react';

import { ArticlesDataProviderContext } from '../providers/Articles.provider';

const useArticles = () => {
  const context = React.useContext(ArticlesDataProviderContext);

  if (context === undefined) {
    throw new Error('Must be used within ArticlesDataProvider.');
  }

  return context;
};

export default useArticles;
