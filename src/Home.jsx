import React from "react";
import { makeStyles, Box } from "@material-ui/core";

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/Content';


const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.dark
  },
}));

function Home({darkMode, setDarkMode}) {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Box display='flex'>
        <Sidebar />
        <Content />
      </Box>
    </div>
  );
}

export default Home;
