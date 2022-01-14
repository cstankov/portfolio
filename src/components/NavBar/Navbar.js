import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {
  AppBar,
  Container,
  IconButton,
  Box,
  SwipeableDrawer,
  Toolbar,
  ListItem,
  List,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

const Navbar = () => {
  const [state, setState] = React.useState(false);

  const sections = ["About", "Skills", "Projects", "Contact"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(true);
  };

  return (
    <AppBar position="fixed" style={{ background: "#000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(event) => {
                handleOpenNavMenu(event);
                toggleDrawer(true);
              }}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchor="left"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <List>
                {sections.map((section) => (
                  <ListItem>
                    <Link
                      to={section}
                      smooth={true}
                      spy={true}
                      activeClass="active"
                      duration={500}
                      offset={-60}
                      className="drawerMenuLinks"
                      onClick={handleCloseNavMenu}
                    >
                      {section}
                    </Link>
                  </ListItem>
                ))}
              </List>{" "}
            </SwipeableDrawer>
          </Box>
          <Box
            className="toolbar"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {sections.map((section) => (
              <Link
                to={section}
                smooth={true}
                spy={true}
                activeClass="active"
                duration={500}
                offset={-60}
                className="toolbarMenuLinks"
                onClick={handleCloseNavMenu}
              >
                {section}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
