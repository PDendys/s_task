import React from 'react';

// styles
import ArticleStyled from './styles';

const Article: React.FC = () => (
  <ArticleStyled>
    <div className="row">
      <div className="col-12 col-md-3">
        <img className="img-fluid" src="https://dummyimage.com/285x150/000/fff" alt="" />
      </div>
      <div className="col-12 col-md-9">
        <div className="row">
          <div className="col-8">
            <h2 className="heading">Lorem ipsum</h2>
          </div>
          <div className="col-4">
            <p>10 Feb. 2010</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Eveniet illo voluptas perferendis labore, officiis ratione
          laudantium commodi eos pariatur.
        </p>
      </div>
    </div>
  </ArticleStyled>
);

export default Article;
