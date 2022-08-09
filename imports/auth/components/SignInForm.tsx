import { Box, Button, InputLabel, TextField } from '@mui/material';
import { signIn } from 'next-auth/react';
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

  function handleGoogleSignIn() { signIn('google', { callbackUrl: '/dashboards/scale' }); }

  function onSubmit(data: LoginFormValues) {
    signIn('credentials', { ...data, callbackUrl: '/dashboards/scale' });
  }

  return (
    <Box width='100%'>
      <Box textAlign='center' mb='24px'>
        <Image alt='ipbl logo' src='/ipbl-logo.png' width='250' height='250' style={{borderRadius: '10%'}} />
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <Button type='submit'>
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
