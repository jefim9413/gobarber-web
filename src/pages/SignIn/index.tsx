import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoIMG from '../../assents/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoIMG} alt="Gobarber" />

        <form>
          <h1>Faça seu login</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="">
          <FiLogIn />
          Criar sua conta
        </a>
      </Content>
      <Background />
    </Container>
  </>
);

export default SignIn;
