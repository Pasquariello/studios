import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import styles from './ResponsiveNavDrawer.module.css'; // TODO - fix imports and move styles - fix layouts directory structure
import Link from 'next/link';



const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Typography px={2}>Tecnicl</Typography>
      <Divider />
      <List>
        {['Connect', 'Services'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const [isOpen, setIsOpen] = useState(false);
 
  const toggleNavIcon = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={styles.navbar}>
    <div className={styles.brand_title}><b>ARDEN</b> studios</div>
    {/* <a href="#" className={styles.toggle_button}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.ba}></span>
    </a> */}
    <div id={styles.nav_icon} className={isOpen ? styles.open : ''} style={{height: '100%'}} onClick={toggleNavIcon}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className={styles.navbar_links}>
      <ul>

      <Link href="/">
         <li><a>Services</a></li>
      </Link>

      <Link href="/">
         <li><a>About</a></li>
      </Link>

      <Link href="/">
         <li><a>Contact</a></li>
      </Link>
        {/* <li><a href="#">Service</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li> */}
      </ul>
    </div>
  </nav>
  );
}