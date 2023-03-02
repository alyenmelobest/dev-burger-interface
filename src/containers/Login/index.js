import React from 'react'

import BurguerLogin from '../../assets/burguer-login.svg'
import Logo from '../../assets/dev-burger-logo.svg'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  Button,
  SignInLink
} from './styles'

function Login() {
  return (
    <Container>
      <LoginImage src={BurguerLogin} alt="Burguer-login-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-image" />
        <h1>Login</h1>
        <Label>Email</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>Sign In</Button>
        <SignInLink>
          Não possui conta? <a>Sign Up</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
