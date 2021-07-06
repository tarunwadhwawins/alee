import '../src/assets/scss/app.scss';
import 'semantic-ui-css/semantic.min.css';
import { addParameters } from '@storybook/react';
// Include more view ports options in story  
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// Added console add on
import '@storybook/addon-console';




export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
})