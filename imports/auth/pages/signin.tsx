import Head from "next/head";
import SignInForm from "../components/SignInForm";
import { Container } from '@material-ui/core';

const signin = () => {
  return(
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container maxWidth='xs' style={{ display: 'flex', height: '100vh', alignItems: 'center' }} fixed>
        <SignInForm />
      </Container>
    </>
  );
};

export default signin;
