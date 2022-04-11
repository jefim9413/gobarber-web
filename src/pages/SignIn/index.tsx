import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logoIMG from '../../assents/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoIMG} alt="Gobarber" />

        <form>
          <h1>Faça seu login</h1>
          <input placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="">
          <FiLogIn />
          Criar sua conta
        </a>
      </Content>
      <Background />
    </Container>
    <h1>SignIn</h1>
  </>
);

export default SignIn;
