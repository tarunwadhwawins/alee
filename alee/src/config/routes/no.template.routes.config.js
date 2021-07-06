import { lazy } from 'react';
import { env } from '../../shared/functional/global-import';

// Configure all routes of the application that contain no template
const NoTemplateRoutesConfing = [
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL === '' ? '/' : env.PUBLIC_URL}`,
    component: lazy(() => import('../../pages/login'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/sign-up`,
    component: lazy(() => import('../../pages/sign-up'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/profile-setup`,
    component: lazy(() => import('../../pages/profile-setup'))
  },
];


export default NoTemplateRoutesConfing;