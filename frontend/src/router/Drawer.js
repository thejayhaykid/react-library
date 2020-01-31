import React from 'react';

export const MenuDrawer = (viewDrawer, toggleDrawer) => {
  return (
    <div open={viewDrawer} onClose={toggleDrawer()}>
        
    </div>
  );
}
