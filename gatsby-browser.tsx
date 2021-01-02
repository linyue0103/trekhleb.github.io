// @see: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
import React from 'react';
import { WrapPageElementBrowserArgs } from 'gatsby';

import './src/styles/global.css';

import RootLayout from './src/components/layouts/RootLayout';

// Wraps every page in a component.
export function wrapPageElement(args: WrapPageElementBrowserArgs): React.ReactElement {
  const { props, element } = args;
  return (
    <RootLayout {...props}>
      {element}
    </RootLayout>
  );
}
