import { lazy } from 'react';
import { env } from '../../shared/functional/global-import';

// Configure all routes of the application that contain authenticate template
const AuthenticateTemplateRoutesConfing = [


  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/dashboard`,
    component: lazy(() => import('../../pages/dashboard'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/profile`,
    component: lazy(() => import('../../pages/profile'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/lesson-library`,
    component: lazy(() => import('../../pages/lesson-library'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/search-result`,
    component: lazy(() => import('../../pages/search-result'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/lesson-plan`,
    component: lazy(() => import('../../pages/lesson-plan'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/lesson-plan-creation`,
    component: lazy(() => import('../../pages/lesson-plan-creation'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/scan-book`,
    component: lazy(() => import('../../pages/scan-book'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/book-flip`,
    component: lazy(() => import('../../pages/book-flip'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/upload-pdf`,
    component: lazy(() => import('../../pages/upload-pdf'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/my-books`,
    component: lazy(() => import('../../pages/my-books'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/chapter`,
    component: lazy(() => import('../../pages/chapter'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/subtitle`,
    component: lazy(() => import('../../pages/subtitle'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/chapter-empty`,
    component: lazy(() => import('../../pages/chapter-empty'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/add-tags`,
    component: lazy(() => import('../../pages/add-tags'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/resources`,
    component: lazy(() => import('../../pages/resources'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/book-summary`,
    component: lazy(() => import('../../pages/book-summary'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/sub-admin`,
    component: lazy(() => import('../../pages/sub-admin'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/subscription`,
    component: lazy(() => import('../../pages/subscription'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/add-tags-listing`,
    component: lazy(() => import('../../pages/add-tags-listing'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/manage-teachers`,
    component: lazy(() => import('../../pages/manage-teachers'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/manage-schools`,
    component: lazy(() => import('../../pages/manage-schools'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/payment-management`,
    component: lazy(() => import('../../pages/payment-management'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/create-template`,
    component: lazy(() => import('../../pages/create-template'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/assign-template`,
    component: lazy(() => import('../../pages/assign-template'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/student-list`,
    component: lazy(() => import('../../pages/student-list'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/subscription-plan`,
    component: lazy(() => import('../../pages/subscription-plan'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/payment`,
    component: lazy(() => import('../../pages/payment'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/school-manage-teachers`,
    component: lazy(() => import('../../pages/school-manage-teachers'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/upload-excel`,
    component: lazy(() => import('../../pages/upload-excel'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/subscription-manage`,
    component: lazy(() => import('../../pages/subscription-manage'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/school-dashboard`,
    component: lazy(() => import('../../pages/school-dashboard'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/user-management`,
    component: lazy(() => import('../../pages/user-management'))
  },
  
];

export default AuthenticateTemplateRoutesConfing;