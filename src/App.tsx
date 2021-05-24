import React from 'react';

// components
import Filters from './components/filters';
import SourcesMenu from './components/sources-menu';
import ArticleList from './components/article-list';

// providers
import { ArticlesDataProvider } from './providers/Articles.provider';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => (
  <ArticlesDataProvider>
    <div className="container">
      <div className="row">
        <div className="col-5 col-lg-12 order-2 order-lg-1">
          <Filters />
        </div>
        <div className="col-7 col-lg-3 order-1 order-lg-2">
          <SourcesMenu />
        </div>
        <div className="col-lg-9 order-3 mt-3 mt-lg-0">
          <ArticleList />
        </div>
      </div>
    </div>
  </ArticlesDataProvider>
);

export default App;
