import { Box, Button, InputLabel, TextField } from '@mui/material';
import { signIn } from 'next-auth/react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from 'imports/core/services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Controller, useForm } from 'react-hook-form';
import Image from 'next/image';
import { GoogleLogo } from 'phosphor-react';

type LoginFormValues = {
  username: string,
  password: string,
}

const SignInForm = () => {
  const { control, handleSubmit } = useForm<LoginFormValues>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  async function testeFirestore() {
    try {
      const docRef = await getDocs(collection(db, "users"));
      docRef.forEach((doc) => {
        console.log(doc.data());
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <Box width='100%'>
      <Box textAlign='center' mb='24px'>
        <Image alt='ipbl logo' src='/ipbl-logo.png' width='250' height='250' style={{borderRadius: '10%'}} />
      </Box>
      <form onSubmit={() => console.log('meu formulário')}>
        <Box mb={2} mt={2} display='flex' alignItems='center'>
          <Box mr={1} width='80px'>
            <InputLabel>Usuário</InputLabel>
          </Box>
          <Controller 
            name='username'
            control={control}
            render={({field}) => (
              <TextField  {...field} fullWidth variant='standard' />
            )}
          />
        </Box>
        <Box mb={2} display='flex' alignItems='center'>
          <Box mr={1} width='80px'>
            <InputLabel>Senha</InputLabel>
          </Box>
          <Controller 
            name='password'
            control={control}
            render={({field}) => (
              <TextField {...field} fullWidth type='password' variant='standard' />
            )}
          />
        </Box>
        <Box textAlign='right'>
          <Button onClick={() => testeFirestore()}>
            Entrar
          </Button>
        </Box>
        <Box textAlign='right'>
          <Button onClick={handleGoogleSignIn} style={{ backgroundColor: '#046909', color: 'snow' }}>
            <GoogleLogo style={{ marginRight: '7px', color: 'red', fontSize: '20px' }} />
            Entrar com Google
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SignInForm;
