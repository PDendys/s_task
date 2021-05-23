import React from 'react';

// components
import Filters from './components/filters';
import SourcesMenu from './components/sources-menu';
import ArticleList from './components/article-list';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => (
    <div className="container">
        <div className="row">
            <div className="col-6 col-md-12 order-2 order-md-1">
                <Filters />
            </div>
            <div className="col-6 col-md-3 order-1 order-md-2">
                <SourcesMenu />
            </div>
            <div className="col-md-9 order-3">
                <ArticleList />
            </div>
        </div>
    </div>
)

export default App;
