import React, { Fragment } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import './Layout.scss';
import HomeNavHeader from '../../components/Nav_bar/HomeNav';
import GuideSlider from '../../containers/sliders/Guiding';
import Footer from '../../components/Footer/Footer';

export interface AppLayoutProps extends RouteComponentProps { }

const AppLayout: React.SFC<AppLayoutProps> = (props: AppLayoutProps) => (
  <Fragment>
    <HomeNavHeader />
    <GuideSlider />
    <Footer />
  </Fragment>
);

export default AppLayout;
