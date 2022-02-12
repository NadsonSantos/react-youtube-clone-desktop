import React, { useState } from "react";

import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  useTheme,
  Switch
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Apps from "@material-ui/icons/Apps";

const useStyle = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 25,
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
}));

const Header = ({darkMode, setDarkMode}) => {
  const theme = useTheme();
  const classes = useStyle();

  return (
    <AppBar color="inherit" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="menu"
          className={classes.menuIcon}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <img src={theme.palette.type === 'dark' ? "/images/branco.png" : "/images/preto.png"} alt="logo" className={classes.logo} />
        <div className={classes.grow} />
        <Switch
          value={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className={classes.icons}
        />

        <IconButton className={classes.icons} sx={{ mr: 2 }}>
          <VideoCallIcon />
        </IconButton>

        <IconButton className={classes.icons} sx={{ mr: 2 }}>
          <Apps />
        </IconButton>

        <IconButton className={classes.icons} sx={{ mr: 2 }}>
          <MoreVertIcon />
        </IconButton>

        <Button
          startIcon={<AccountCircle />}
          variant="outlined"
          color="secondary"
        >
          Fazer Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
