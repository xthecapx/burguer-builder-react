import React from 'react';

function Layout(props) {
  return (
    <>
      <div>Toolbar, SideDrawer, Backgrop</div>
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
