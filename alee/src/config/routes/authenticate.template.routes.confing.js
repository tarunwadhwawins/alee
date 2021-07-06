import { lazy } from 'react';
import { env } from '../../shared/functional/global-import';

// Configure all routes of the application that contain authenticate template
const AuthenticateTemplateRoutesConfing = [

  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/user-setting`,
    component: lazy(() => import('../../pages/user-setting'))
  },
  {
    exact: true,
    private: false,
    path: `${env.PUBLIC_URL}/reset-password`,
    component: lazy(() => import('../../pages/reset-password-page'))

  },
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
    path: `${env.PUBLIC_URL}/search`,
    component: lazy(() => import('../../pages/search'))
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
  }
  
];

export default AuthenticateTemplateRoutesConfing;