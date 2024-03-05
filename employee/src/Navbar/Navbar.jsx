// import React from "react";
// // import { makeStyles } from '@mui/material/styles';
// // import { makeStyles } from '@mui/system';
// import { styled } from '@mui/system';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/material/Menu';
// import { Link } from "react-router-dom";

// const useStyles = styled((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   navlink:{
//     color: 'white',
//     textDecoration: 'none'
//   }
// }));

// export default function App() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Link className={classes.navlink} to="/">
//             <Typography variant="h6" className={classes.title}>
//               CRUD
//             </Typography>
//           </Link>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }


// import React from 'react';
// import { styled } from '@mui/system';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/material/Menu';
// import { Link } from "react-router-dom";

// const NavLink = styled(Link)(({ theme }) => ({
//   color: 'white',
//   textDecoration: 'none',
//   flexGrow: 1,
// }));

// const MenuButton = styled(IconButton)(({ theme }) => ({
//   marginRight: theme.spacing(2),
// }));

// export default function App() {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <MenuButton edge="start" color="inherit" aria-label="menu">
//           <MenuIcon />
//         </MenuButton>
//         <NavLink to="/">
//           <Typography variant="h6">
//             CRUD
//           </Typography>
//         </NavLink>
//       </Toolbar>
//     </AppBar>
//   );
// }


import React from "react";
import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';
import { Link } from "react-router-dom";

const NavLink = styled(Link)(({ theme }) => ({
  color: 'white',
  textDecoration: 'none',
  flexGrow: 1,
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

export default function App() {
  return (
    <AppBar position="static">
      <Toolbar>
        <MenuButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </MenuButton>
        <NavLink to="/">
          <Typography variant="h6">
            CRUD
          </Typography>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}