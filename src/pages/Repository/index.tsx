import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Logo" />

        <Link to="/">
          <FiChevronLeft size={20} color="#A8A8B3" />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/45343619?s=460&u=1929279b8eb8dbe2434c20e7ad7e239674b4cc17&v=4"
            alt="heliton"
          />

          <div>
            <strong>helitonoliveira/repo</strong>
            <p>descrição do repositório</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1908</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="teste">
          <div>
            <strong>eroaieeoererer</strong>
            <p>sfefefeef</p>
          </div>

          <FiChevronRight size={20} color="#C9C9D4" />
        </Link>

        <Link to="teste">
          <div>
            <strong>eroaieeoererer</strong>
            <p>sfefefeef</p>
          </div>

          <FiChevronRight size={20} color="#C9C9D4" />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
