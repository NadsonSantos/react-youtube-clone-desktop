import React from "react";
import {
  makeStyles,
  Toolbar,
  Button,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Divider,
  Box,
  Hidden
} from "@material-ui/core";

import AccountCircle from "@material-ui/icons/AccountCircle";

import HomeIcon from "@material-ui/icons/Home";
import Subscriptions from "@material-ui/icons/Subscriptions";
import Whatshot from "@material-ui/icons/Whatshot";

import VideoLibrary from "@material-ui/icons/VideoLibrary";
import History from "@material-ui/icons/History";

import AddCircle from "@material-ui/icons/AddCircle";

const drawerWidth = 240;

const useStyle = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: "none",
  },
  ListItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subHeader: {
    textTransform: "UpperCase",
  },
}));

const Header = () => {
  const classes = useStyle();

  return (
    <Hidden mdDown>
      <Drawer
        variant="permanent"
        sx={{
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <List>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.ListItemText,
              }}
              primary={"Início"}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<Whatshot />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.ListItemText,
              }}
              primary={"Em Alta"}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<Subscriptions />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.ListItemText,
              }}
              primary={"Inscrições"}
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.ListItemText,
              }}
              primary={"Biblioteca"}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<History />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.ListItemText,
              }}
              primary={"Histórico"}
            />
          </ListItem>
        </List>
        <Divider />
        <Box p={7}>
          <Typography variant="body2">
            Faça login para curtir vídeos, comentar e se inscrever
          </Typography>
          <Box mt={2}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<AccountCircle />}
            >
              Fazer Login
            </Button>
          </Box>
        </Box>
        <Divider />
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              className={classes.subHeader}
            >
              O Melhor do youtube
            </ListSubheader>
          }
        >
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={"Música"}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={"Esportes"}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={"Jogos"}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={"Filmes"}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={"Notícias"}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={"Ao vivo"}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={"Destaques"}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={"Videos 360"}
            />
          </ListItem>
        </List>
        <Divider />
        <ListItem button classes={{ root: classes.listItem }}>
          <ListItemIcon>
            <AddCircle />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.listItemText,
            }}
            primary={"Procurar mais"}
          />
        </ListItem>
        <Divider />
      </Drawer>
    </Hidden>
  );
};

export default Header;
