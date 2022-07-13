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
      <Typography px={2}>CASCADIAN</Typography>
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

  const active = isOpen ? 'flex' : 'none';

  const renderMeduLinks = () => {
    return (
      <ul>
        <Link href="/">
          <li><a>Services</a></li>
        </Link>

        <Link href="/">
          <li><a>Contact</a></li>
        </Link>
      </ul>
    )
  }

  return (
    <nav className={styles.navbar}>
    <Link href="/">
    <a className={styles.brand_title}><b>CASCADIAN</b></a>
    </Link>
    <div id={styles.nav_icon} className={isOpen ? styles.open : ''} style={{height: '100%'}} onClick={toggleNavIcon}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className={`${styles.navbar_links} ${isOpen ? styles.active : ''}`}>
      <ul>
        <li>
          <Link href="/services">
            <a>Services</a>
          </Link>
        </li>

        <Link href="/contact">
          <li><a>Contact</a></li>
        </Link>
      </ul>
    </div>
  </nav>
  );
}