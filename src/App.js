import React, { Suspense } from 'react';
import { Route, Switch } from 'wouter';

import './App.scss';

import { HeaderComponent } from './commons/components/Header/header.component';
import ErrorPage from './pages/ErrorPage/error.page';
import { SearchPage } from './pages/Search/search.page';

const ResultSearchPage = React.lazy(() =>
  import('./pages/ResultSearch/result-search.page').then(module => ({ default: module.ResultSearchPage }))
);
const DetailProductPage = React.lazy(() =>
  import('./pages/DetailProduct/detail-product.page').then(module => ({ default: module.DetailProductPage }))
);

function App() {
  React.useState({
    keyword: ''
  });
  return (
    <div className="App">
      <HeaderComponent/>
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route path="/items" component={ResultSearchPage} />
          <Route path="/items/:id" component={DetailProductPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
