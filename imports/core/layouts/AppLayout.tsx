import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Menu } from "@material-ui/icons";
import Head from "next/head";
import { ReactNode } from "react";

interface AppLayoutInterface {
  title: string,
  children: ReactNode,
  disableHamburguer?: boolean,
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stdMargin: {
    margin: '4px',
  },
}));

function AppLayout({
  title,
  children,
  disableHamburguer = false,
}: AppLayoutInterface) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AppBar elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Box className={classes.toolBar}>
           { !disableHamburguer &&
            <IconButton className={classes.stdMargin}>
              <Menu />
            </IconButton> }
            <Avatar className={classes.stdMargin} variant='rounded' src='/ipbl-logo.png' />
            <Typography className={classes.stdMargin} variant='h5'>
              {title}
            </Typography>
          </Box>
          <Box className={classes.toolBar}>
            <Box className={classes.stdMargin}>
              {'< Junho >'}
            </Box>
            <div className={classes.stdMargin}>
              <Avatar>
                LF
              </Avatar>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <main>
        <Box pt={9} pl={3} pr={3}>
          {children}
        </Box>
      </main>
    </>
  );
}

export default AppLayout;