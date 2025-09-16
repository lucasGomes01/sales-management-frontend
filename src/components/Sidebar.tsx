import * as React from 'react';
import { Drawer, List, ListItem, ListItemText, Collapse, ListItemButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [openProducts, setOpenProducts] = React.useState(false);

  return (
    <Drawer
      variant="persistent"
      open={isOpen}
      onClose={toggleSidebar}
    >
      <List>
        <ListItem>
          <ListItemButton component={Link} to="/" onClick={toggleSidebar}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton onClick={() => setOpenProducts(!openProducts)}>
            <ListItemText primary="Products" />
            {openProducts ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openProducts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem>
              <ListItemButton component={Link} to="/products/list" sx={{ pl: 4 }} onClick={toggleSidebar}>
                <ListItemText primary="Products" />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>

        <ListItem>
          <ListItemButton component={Link} to="/profile" onClick={toggleSidebar}>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
