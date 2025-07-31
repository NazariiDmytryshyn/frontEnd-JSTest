import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { Menu, ExpandLess, ExpandMore } from "@mui/icons-material";

export type MenuItem = {
  label: string;
  children?: MenuItem[];
};

type SidebarMenuProps = {
  menuItems: MenuItem[];
  anchor?: "left" | "right";
};

export const SidebarMenu = ({
  menuItems,
  anchor = "right",
}: SidebarMenuProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);
  const toggleSubmenu = (label: string) => {
    setOpenSubmenu((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <IconButton onClick={toggleDrawer} sx={{ m: 2 }}>
        <Menu />
      </IconButton>

      <Drawer anchor={anchor} open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Menu
          </Typography>
          <List>
            {menuItems.map(({ label, children = [] }) => (
              <Box key={label}>
                <ListItemButton
                  onClick={() => {
                    if (children.length > 0) {
                      toggleSubmenu(label);
                    } else {
                      toggleDrawer();
                    }
                  }}
                >
                  <ListItemText primary={label} />
                  {children.length > 0 &&
                    (openSubmenu === label ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>

                {children.length > 0 && (
                  <Collapse
                    in={openSubmenu === label}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {children.map((child) => (
                        <ListItemButton
                          key={child.label}
                          sx={{ pl: 4 }}
                          onClick={toggleDrawer}
                        >
                          <ListItemText primary={child.label} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
