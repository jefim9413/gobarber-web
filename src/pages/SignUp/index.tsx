import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import logoIMG from '../../assents/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';

const SignUp: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoIMG} alt="Gobarber" />

        <form>
          <h1>Faça seu cadastro</h1>
          <Input name="nome" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
      <Background />
    </Container>
  </>
);

export default SignUp;
