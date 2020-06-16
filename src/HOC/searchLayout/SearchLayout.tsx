import React, { Fragment } from 'react';
import { Switch, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import AppNavbar from '../../components/Nav_bar/AppNavbar';
import Search from '../../containers/search/SearchResults/Search';
import './SearchLayout.scss'
import SearchFilter from '../../containers/search/filters/search/SearchFilter';
import Footer from '../../components/Footer/Footer';

export interface AppLayoutProps extends RouteComponentProps { }

const AppLayout: React.SFC<AppLayoutProps> = (props: AppLayoutProps) => (
  <Fragment>
      {/* <AppNavbar /> */}
      <SearchFilter />
      <div className="main__">
          <Route path="/browse" component={Search} />
      </div>
       <Footer />
  </Fragment>
);

export default withRouter(AppLayout);
