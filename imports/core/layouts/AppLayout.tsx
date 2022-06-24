import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";
import Head from "next/head";

interface AppLayoutInterface {
  title: string,
}

function AppLayout({
  title,
}: AppLayoutInterface) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AppBar>
        <Toolbar>
          <IconButton>
            Hamburger
          </IconButton>
          <Avatar variant='rounded' src='/ipbl-logo.png' />
          <Typography variant='h5'>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default AppLayout;