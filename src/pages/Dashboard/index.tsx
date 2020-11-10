import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Logo Github Explore" />
    <Title>Explore Repositórios no Github.</Title>

    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="button">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/45343619?s=460&u=1929279b8eb8dbe2434c20e7ad7e239674b4cc17&v=4"
          alt="heliton"
        />

        <div>
          <strong>helitonoliveira/repo</strong>
          <p>descrição do repositório</p>
        </div>

        <FiChevronRight size={20} color="#C9C9D4" />
      </a>

      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/45343619?s=460&u=1929279b8eb8dbe2434c20e7ad7e239674b4cc17&v=4"
          alt="heliton"
        />

        <div>
          <strong>helitonoliveira/repo</strong>
          <p>descrição do repositório</p>
        </div>

        <FiChevronRight size={20} color="#C9C9D4" />
      </a>

      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/45343619?s=460&u=1929279b8eb8dbe2434c20e7ad7e239674b4cc17&v=4"
          alt="heliton"
        />

        <div>
          <strong>helitonoliveira/repo</strong>
          <p>descrição do repositório</p>
        </div>

        <FiChevronRight size={20} color="#C9C9D4" />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
