import { useState } from 'react';
import Divider from '@mui/material/Divider';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import styles from './ResponsiveNavDrawer.module.css'; // TODO - fix imports and move styles - fix layouts directory structure
import Link from 'next/link';

import Image from 'next/image'




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
        {['Connect', 'Services', 'Blog'].map((text, index) => (
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
          <a><li>Services</li></a>
        </Link>

        <Link href="/">
          <a><li>Contact</li></a>
        </Link>
      </ul>
    )
  }

  return (
    <nav className={styles.navbar}>
    <Link href="/">
      <a>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{ width: '45px', margin:'0 8px'}}>
            <Image
              layout="responsive"
              src="/static/images/logo.png"
              alt="site logo"
              width={45}
              height={45}
            />
          </div>
          <p><b>CASCADIAN</b></p>
        </div>
      </a>
      {/* <a className={styles.brand_title}></a> */}
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
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  );
}