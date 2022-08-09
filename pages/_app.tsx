import '../styles/globals.css';
import type { AppProps } from 'next/app';
import theme from 'imports/core/layouts/theme';
import { ThemeProvider } from '@mui/material';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />;
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
