import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardHome from "./DashboardHome";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Button from "@mui/material/Button";
import MakeAdmin from "./MakeAdmin";
import AddDoctor from "./AddDoctor";
import useAuth from "../../hook/useAuth";
import AdminRoute from "./AdminRoute";

const drawerWidth = 200;

const Dashboard = (props) => {
  // const { logOut } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin,logOut } = useAuth();
  console.log(admin);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <List>
        <Link to="/appointment">
          {" "}
          <Button color="inherit"> Appointment</Button>{" "}
        </Link>
        <Link to={`${url}`}>
          {" "}
          <Button color="inherit"> Dashboard</Button>{" "}
        </Link>
        {/* Check Admin Role  */}
        {admin && (
          <Box>
            <Link to={`${url}/makeAdmin`}>
              {" "}
              <Button color="inherit">Make Admin</Button>{" "}
            </Link>
            <Link to={`${url}/addDoctor`}>
              {" "}
              <Button color="inherit"> Add Doctor</Button>{" "}
            </Link>{" "}
          </Box>
        )}
        <Link to={`${url}`}>
          {" "}
          <Button onClick={logOut} color="inherit"> LogOut</Button>{" "}
        </Link>
        
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        {/* <Navigation/>  */}
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addDoctor`}>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        </Switch>

        {/* <Footer></Footer> */}
      </Box>
    </Box>
  );
};
Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
