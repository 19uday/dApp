import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import MyActivity from './MyActivity';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  yellow: {
    backgroundColor: "#FFFF2E"
  },
  red: {
    backgroundColor: "red"
  },
  green: {
    backgroundColor: "#0eff00"
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [occupier, setOccupier] = React.useState("team");
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOccupier = (occupier) => {
    setOccupier(occupier);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>    <ListItem button onClick={() => handleOccupier("team")}>
      <ListItemIcon>
        <DashboardIcon/>
      </ListItemIcon>
      <ListItemText primary=" Team Dashboard" />
    </ListItem>
    <ListItem button onClick={() => handleOccupier("personal")}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Personal Dashboard" />
    </ListItem></List>
        <Divider />
        <List>    <ListItem button onClick={() => handleOccupier("payments")}>
                <ListItemIcon>
                  <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Payments" />
              </ListItem>
              <ListItem button onClick={() => handleOccupier("rewards")}>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Rewards" />
              </ListItem></List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {occupier === "personal" ? 
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={clsx(fixedHeightPaper, classes.yellow)}>
                <center>
                  <h3>UI Design</h3>
                  <h5>Design robust and beautful UI for the application</h5>
                  <h6>10hrs</h6>
                  <h6>Deadline: 23rd Jan 2020</h6>
                </center>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={clsx(fixedHeightPaper, classes.red)}>
              <center>
                  <h3>Motivation Decision</h3>
                  <h5>Conclude on a proper motivation for the project.</h5>
                  <h6>10hrs</h6>
                  <h6>Deadline: 23rd Jan 2020</h6>
              </center>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={clsx(fixedHeightPaper, classes.green)}>
              <center>
                  <h3>Motivation Decision</h3>
                  <h5>Conclude on a proper motivation for the project.</h5>
                  <h6>10hrs</h6>
                  <h6>Deadline: 23rd Jan 2020</h6>
              </center>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={clsx(fixedHeightPaper, classes.yellow)}>
              <center>
                  <h3>Motivation Decision</h3>
                  <h5>Conclude on a proper motivation for the project.</h5>
                  <h6>10hrs</h6>
                  <h6>Deadline: 23rd Jan 2020</h6>
              </center>              
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <MyActivity />
              </Paper>
            </Grid>
          </Grid>
        </Container> : null}
        {occupier === "team" ? 
                <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                  {/* Chart */}
                  <Grid item xs={12} md={8} lg={9}>
                    <Paper className={fixedHeightPaper}>
                      <Chart />
                    </Paper>
                  </Grid>
                  {/* Recent Deposits */}
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                      <Deposits />
                    </Paper>
                  </Grid>
                  {/* Recent Orders */}
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <Orders />
                    </Paper>
                  </Grid>
                </Grid>
                <Box pt={4}>
                  <Copyright />
                </Box>
              </Container>:null}
      </main>
    </div>
  );
}
