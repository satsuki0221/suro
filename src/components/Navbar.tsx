import * as React from 'react';
import AppBar from 'material-ui/AppBar';

export const Navbar = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonTouchTap= {() => {
      console.log('aaaa')
    }}
  />
);
